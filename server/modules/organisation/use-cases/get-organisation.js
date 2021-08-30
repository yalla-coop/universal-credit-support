import Boom from '@hapi/boom';
import * as Organisation from '../model';

const getOrganisation = async ({ id, userOrganisationId, withUserDetails }) => {
  if (Number(userOrganisationId) !== Number(id)) {
    throw Boom.forbidden();
  }
  if (withUserDetails) {
    const organisation = await Organisation.findOrganisationWithUser(id);
    return organisation;
  }
  const organisation = await Organisation.findOrganisation(id);

  return organisation;
};

export default getOrganisation;
