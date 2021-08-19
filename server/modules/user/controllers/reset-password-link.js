import * as User from '../use-cases';

const resetPasswordLink = async (req, res, next) => {
  const { email } = req.body;
  try {
    await User.resetPasswordLink({ email });
    res.json();
  } catch (error) {
    next(error);
  }
};

export default resetPasswordLink;
