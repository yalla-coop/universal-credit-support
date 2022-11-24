import * as Organisation from '../model';

const updateOrganisationStatus = async ({ id, status }) => {
  return Organisation.updateOrganisationStatus({ id, status });
};

export default updateOrganisationStatus;
