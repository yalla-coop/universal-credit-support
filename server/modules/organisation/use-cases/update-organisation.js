import Boom from '@hapi/boom';
import * as Organisation from '../model';
import * as Media from '../../media/model';
import { errorMsgs } from '../../../services/error-handler';
import { moveFile } from '../../../services/files-storage';
import { getClient } from '../../../database/connect';

const updateOrganisation = async ({
  id,
  uniqueSlug,
  contactLinks,
  benefitCalculatorLink,
  benefitCalculatorLabel,
  colors,
  logoFile,
  userId,
}) => {
  const client = await getClient();

  try {
    await client.query('BEGIN');
    const {
      name,
      key,
      bucket,
      bucketRegion,
      size,
      fileType,
      fileCategory,
    } = logoFile;

    const { newKey } = await moveFile({
      bucket,
      key,
    });

    const media = await Media.createMedia(
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

    const orgBeforeUpdate = await Organisation.updateOrganisation(
      {
        id,
        uniqueSlug,
        contactLinks,
        benefitCalculatorLink,
        benefitCalculatorLabel,
        colors,
        logoId: media.id,
      },
      client,
    );

    await Media.deleteMediaById(orgBeforeUpdate.logoId, client);
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
    throw error;
  } finally {
    client.release();
  }
};

export default updateOrganisation;
