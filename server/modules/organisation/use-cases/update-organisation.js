import Boom from '@hapi/boom';
import * as Organisation from '../model';
import * as User from '../../user/model';
import * as Media from '../../media/model';
import { errorMsgs } from '../../../services/error-handler';
import { moveFile } from '../../../services/files-storage';
import { getClient } from '../../../database/connect';

const updateOrganisation = async ({
  id,
  organisationName,
  uniqueSlug,
  contactLinks,
  benefitCalculatorLink,
  benefitCalculatorLabel,
  colors,
  logoFile,
  userId,
  userOrganisationId,
  firstName,
  lastName,
  email,
  withUserDetails,
}) => {
  let createdMedia;
  const client = await getClient();

  if (Number(userOrganisationId) !== Number(id)) {
    throw Boom.forbidden();
  }

  try {
    await client.query('BEGIN');
    if (logoFile && logoFile.key) {
      const {
        name,
        key,
        bucket,
        bucketRegion,
        size,
        fileType,
        fileCategory,
        uploadedToS3,
        isNew,
      } = logoFile;

      if (uploadedToS3 && isNew) {
        const { newKey } = await moveFile({
          bucket,
          key,
        });

        createdMedia = await Media.createMedia(
          {
            fileName: name,
            fileType,
            size,
            key: newKey,
            bucket,
            bucketRegion,
            createdBy: userId,
            fileCategory,
          },
          client,
        );
      }
    }
    const orgBeforeUpdate = await Organisation.updateOrganisation(
      {
        id,
        organisationName,
        uniqueSlug,
        contactLinks,
        benefitCalculatorLink,
        benefitCalculatorLabel,
        colors,
        logoId: createdMedia && createdMedia.id,
      },
      client,
    );

    if (createdMedia && createdMedia.id) {
      // delete the old logo if user have uploaded new one
      await Media.deleteMediaById(orgBeforeUpdate.logoId, client);
    }

    if (withUserDetails) {
      await User.updateUser({ id: userId, firstName, lastName, email }, client);
    }
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');

    if (
      Number(error.code) === 23505 &&
      error.constraint === 'organisations_unique_slug_key'
    ) {
      throw Boom.conflict(errorMsgs.UNIQUE_LINK_IS_ALREADY_TAKEN, {
        field: 'uniqueSlug',
      });
    }
    if (
      Number(error.code) === 23505 &&
      error.constraint === 'users_email_key'
    ) {
      throw Boom.conflict(errorMsgs.EMAIL_ALREADY_EXISTS, {
        field: 'email',
      });
    }
    throw error;
  } finally {
    client.release();
  }
};

export default updateOrganisation;
