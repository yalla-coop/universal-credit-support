import Boom from '@hapi/boom';
import * as Organisation from '../model';

const getOrganisation = async ({ id, userId }) => {
  const organisation = await Organisation.findOrganisation(id);
  if (organisation.userId !== userId) {
    throw Boom.forbidden();
  }
  return organisation;
};

export default getOrganisation;
