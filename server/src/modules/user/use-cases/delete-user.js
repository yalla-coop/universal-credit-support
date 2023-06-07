import Boom from '@hapi/boom';
import * as User from '../model';
import * as Organisation from '../../organisation/use-cases';
import { errorMsgs } from '../../../services/error-handler';
import { userRoles } from '../../../constants';

const deleteUser = async ({ id, userId, role }) => {
  const user = await User.findUserWithOrgDetails(id);

  if (!user) {
    throw Boom.notFound(errorMsgs.NOT_FOUND);
  }

  if (role === userRoles.ADMIN && user.id !== userId) {
    throw Boom.forbidden(errorMsgs.UNAUTHORISED);
  }

  await Organisation.deleteOrganisation(user.organisationId);
  return User.updateUserToDeleted(id);
};

export default deleteUser;
