import * as User from '../model';

const updateUserRole = async ({ id, role }) => {
  const activity = await User.updateUserRole({
    id,
    role,
  });

  return activity;
};
export default updateUserRole;
