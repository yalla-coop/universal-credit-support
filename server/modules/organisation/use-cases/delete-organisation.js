import * as Organisation from '../model';

const deleteOrganisation = (id) => {
  return Organisation.updateOrganisationToDeleted(id);
};

export default deleteOrganisation;
