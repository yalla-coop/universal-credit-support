import * as User from '../use-cases';
import { createToken } from '../../../helpers';

const login = async (req, res, next) => {
  const { sqreen } = req;
  const { email, password, reToken } = req.body;

  try {
    const user = await User.login({
      email,
      password,
      reToken,
    });

    const { token, tokenName, options } = createToken({ id: user.id });
    res.cookie(tokenName, token, options);

    sqreen.auth_track(true, user);
    res.json(user);
  } catch (error) {
    sqreen.auth_track(false, { email });
    next(error);
  }
};

export default login;
