import jwt from 'jsonwebtoken';
import config from '../config';
import { TOKEN_NAME, TOKEN_MAX_AGE } from '../constants';

const { secret } = config.server;
const { env } = config.common;

const createToken = (data) => {
  const maxAge = TOKEN_MAX_AGE;
  const expiresIn = `${TOKEN_MAX_AGE}ms`;
  const token = jwt.sign(data, secret, {
    expiresIn,
  });

  const expressOptions = {
    maxAge,
    httpOnly: true,
    secure: env === 'production',
    // set the secure flag only in production
    // warning, cookies on production will only work over https and not http
  };
  return { token, tokenName: TOKEN_NAME, options: expressOptions };
};

export default createToken;
