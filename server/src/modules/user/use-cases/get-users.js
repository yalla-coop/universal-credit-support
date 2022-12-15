import * as User from '../model';

const getUsers = async () => {
  const data = await User.getUsers();

  return data;
};

export default getUsers;
