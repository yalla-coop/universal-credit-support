import Boom from '@hapi/boom';
import * as Organisation from '../model';

const getOrganisations = async ({ status }) => {
  if (status) {
    return Organisation.findOrganisationsByStatus(status);
  }
  throw Boom.notFound();
};

export default getOrganisations;
