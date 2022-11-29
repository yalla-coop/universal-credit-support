import * as Organisation from '../model';

function deleteOrganisation({ id }) {
  return Organisation.updateOrganisationToDeleted(id);
}

export default deleteOrganisation;
