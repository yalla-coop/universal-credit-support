import * as User from '../model';

function deleteUser({ id }) {
  return User.deleteUser(id);
}

export default deleteUser;
