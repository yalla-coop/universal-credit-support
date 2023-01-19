import Boom from '@hapi/boom';
import * as Organisation from '../model';
import { getFilePreSignedUrl as getMediaUrlService } from '../../../services/files-storage';

const getOrganisationByUniqueSlug = async ({ uniqueSlug }) => {
  const organisation = await Organisation.findOrganisationForPublicBySlug(
    uniqueSlug,
  );
  if (!organisation) {
    throw Boom.notFound();
  }

  if (organisation && organisation.key && organisation.bucket) {
    organisation.logoUrl = await getMediaUrlService({
      key: organisation.key,
      bucket: organisation.bucket,
    });
  }
  return organisation;
};

export default getOrganisationByUniqueSlug;
