// import * as User from '../use-cases';
// import { userRoles } from '../../../constants';
import { createToken } from '../../../helpers';

const signup = async (req, res, next) => {
  try {
    // create user in db usecase

    const { token, tokenName, options } = createToken({ id: 'user.id' });
    res.cookie(tokenName, token, options);

    res.json({}); // return user
  } catch (error) {
    next(error);
  }
};

export default signup;
