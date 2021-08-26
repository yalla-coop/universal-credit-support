import * as User from '../use-cases';

const getAdminUsers = async (req, res, next) => {
  try {
    const users = await User.getAdminUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export default getAdminUsers;
