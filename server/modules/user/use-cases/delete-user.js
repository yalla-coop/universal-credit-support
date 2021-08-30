import * as User from '../model';

function deleteUser({ id }) {
  return User.updateUserToDeleted(id);
}

export default deleteUser;
