import Boom from '@hapi/boom';
import * as Organisation from '../model';
import * as User from '../../user/model';
import * as Media from '../../media/model';
import { errorMsgs } from '../../../services/error-handler';
import { moveFile } from '../../../services/files-storage';
import { getClient } from '../../../database/connect';
import { userRoles } from '../../../constants';
import resetPasswordLink from '../../user/use-cases/reset-password-link';

const updateOrganisation = async ({
  id,
  organisationName,
  typeOfOrganisation,
  uniqueSlug,
  colors,
  logoFile,
  userId, // user id to update details for
  loggedInUserId, // user id of logged in user
  userOrganisationId,
  firstName,
  lastName,
  email,
  backupEmail,
  withUserDetails,
  loggedInUserRole,
}) => {
  let createdMedia;
  const isSuperAdminEditingAnotherOrg =
    loggedInUserRole === userRoles.SUPER_ADMIN &&
    Number(userOrganisationId) !== Number(id);

  const client = await getClient();

  const user = await User.findUserWithOrgDetails(userId);
  const emailHasChanged = email && email !== user.email;

  if (
    (Number(userOrganisationId) !== Number(id) &&
      !isSuperAdminEditingAnotherOrg) ||
    !user ||
    Number(user.organisationId) !== Number(id) // userId provided is not part of the organisation
  ) {
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
            createdBy: loggedInUserId,
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
        colors,
        logoId: createdMedia && createdMedia.id,
        typeOfOrganisation,
        status:
          loggedInUserRole === userRoles.ADMIN && emailHasChanged
            ? 'AWAITING_APPROVAL'
            : null,
      },
      client,
    );

    if (createdMedia && createdMedia.id) {
      // delete the old logo if user have uploaded new one
      await Media.deleteMediaById(orgBeforeUpdate.logoId, client);
    }

    if (withUserDetails) {
      await User.updateUser(
        { id: userId, firstName, lastName, email, backupEmail },
        client,
      );
    }

    await client.query('COMMIT');

    if (isSuperAdminEditingAnotherOrg && emailHasChanged) {
      await resetPasswordLink({ email, resetByAdmin: true });
    }
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
