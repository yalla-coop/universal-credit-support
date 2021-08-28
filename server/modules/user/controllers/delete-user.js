import * as User from '../use-cases';

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    await User.deleteUser({ id });
    res.send();
  } catch (error) {
    next(error);
  }
};

export default deleteUser;
