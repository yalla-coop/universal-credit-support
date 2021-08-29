import Boom from '@hapi/boom';
import * as Organisation from '../model';

const getOrganisation = async ({ id, userOrganisationId }) => {
  if (Number(userOrganisationId) !== Number(id)) {
    throw Boom.forbidden();
  }
  const organisation = await Organisation.findOrganisation(id);

  return organisation;
};

export default getOrganisation;
