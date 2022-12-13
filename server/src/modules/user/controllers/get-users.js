import * as User from '../use-cases';

const getUsers = async (req, res, next) => {
  try {
    const users = await User.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export default getUsers;
