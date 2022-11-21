import Boom from '@hapi/boom';
import * as Organisation from '../model';

const updateResources = async ({ id, userOrganisationId, resources }) => {
  if (Number(userOrganisationId) !== Number(id)) {
    throw Boom.forbidden();
  }

  await Organisation.updateOrganisationResources({
    organisationId: id,
    resources,
  });
  await Organisation.deleteResourcesNotInKeys({
    organisationId: id,
    keys: resources.map((r) => r.key),
  });
};

export default updateResources;
