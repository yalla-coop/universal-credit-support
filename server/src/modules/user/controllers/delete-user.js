import * as User from '../use-cases';

const deleteUser = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;

    const { id } = req.body;

    await User.deleteUser({ id, userId, role });

    res.send();
  } catch (error) {
    next(error);
  }
};

export default deleteUser;
