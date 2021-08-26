import * as User from '../model';

const getAdminUsers = async () => {
  const data = await User.findAdminUsers();

  return data;
};

export default getAdminUsers;
