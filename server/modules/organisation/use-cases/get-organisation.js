import Boom from '@hapi/boom';
import * as Organisation from '../model';
import { getFilePreSignedUrl as getMediaUrlService } from '../../../services/files-storage';

const getOrganisation = async ({ id, userOrganisationId, withUserDetails }) => {
  if (Number(userOrganisationId) !== Number(id)) {
    throw Boom.forbidden();
  }
  if (withUserDetails) {
    const organisation = await Organisation.findOrganisationWithUser(id);
    return organisation;
  }
  const organisation = await Organisation.findOrganisation(id);

  if (organisation && organisation.key && organisation.bucket) {
    organisation.logUrl = await getMediaUrlService({
      key: organisation.key,
      bucket: organisation.bucket,
    });
  }

  return organisation;
};

export default getOrganisation;
