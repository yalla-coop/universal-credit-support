import jwt from 'jsonwebtoken';
import config from '../config';
import { TOKEN_NAME, TOKEN_MAX_AGE } from '../constants';

const { secret } = config.server;

const createTestToken = (data) => {
  const maxAge = TOKEN_MAX_AGE;
  const expiresIn = `${maxAge}ms`;
  const token = jwt.sign(data, secret, {
    expiresIn,
  });

  return `${TOKEN_NAME}=${token}`;
};

export default createTestToken;
