import * as User from '../use-cases';
import { createToken } from '../../../helpers';

const signup = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      backupEmail,
      password,
      organisationName,
      typeOfOrganisation,
      agreedOnTerms,
    } = req.body;
    const user = await User.signup({
      firstName,
      lastName,
      email,
      backupEmail,
      password,
      organisationName,
      typeOfOrganisation,
      agreedOnTerms,
    });
    const { token, tokenName, options } = createToken({ id: user.id });
    res.cookie(tokenName, token, options);

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export default signup;
