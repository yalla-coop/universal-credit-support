import * as User from '../use-cases';

const updatePassword = async (req, res, next) => {
  const { token, password } = req.body;
  try {
    await User.updatePassword({ token, password });
    res.json();
  } catch (error) {
    next(error);
  }
};

export default updatePassword;
