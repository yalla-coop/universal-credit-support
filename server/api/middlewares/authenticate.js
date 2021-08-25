import { verify } from 'jsonwebtoken';
import Boom from '@hapi/boom';

import config from '../../config';
import * as constants from '../../constants';
import { findUserById } from '../../modules/user/model';

const { TOKEN_NAME } = constants;

const { secret } = config.server;

const authenticate = (isPublic) => async (req, res, next) => {
  // get cookies from the request
  try {
    const { cookies } = req;
    if (!cookies || !cookies[TOKEN_NAME]) {
      if (isPublic) {
        return next();
      }

      throw Boom.unauthorized();
    }

    let decoded;
    try {
      // verify the token
      decoded = await verify(cookies[TOKEN_NAME], secret);
      // if not valid clear token
    } catch (error) {
      res.clearCookie(TOKEN_NAME);
      throw Boom.unauthorized();
    }

    // get user Id from token
    const { id } = decoded;
    const user = await findUserById(id);

    if (!user) {
      res.clearCookie(TOKEN_NAME);
      throw Boom.unauthorized();
    }

    // req.sqreen.identify(req, user);

    // put the user info in the req to be accessed in the next middlewares
    req.user = user;
    return next();
  } catch (error) {
    next(error);
  }
};

export default authenticate;
