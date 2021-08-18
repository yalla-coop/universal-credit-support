import csrf from 'csurf';
import { CSRF_TOKEN, XSRF_TOKEN, envTypes } from '../../constants';

import config from '../../config';

const { env } = config.common;

const csrfProtectionMock = (req, res, next) => {
  return next();
};

const csrfProtectionEnabled = csrf({
  // the cookie that is attached to each request
  cookie: {
    key: CSRF_TOKEN,
    httpOnly: true,
    secure: env === 'production',
    sameSite: 'strict',
  },
});

const csrfProtection =
  env === envTypes.TEST ? csrfProtectionMock : csrfProtectionEnabled;

const createCSRFToken = (req, res, next) => {
  if (env === envTypes.TEST) {
    return next();
  }

  const token = req.csrfToken();
  // the cookie that axios read and send its value in the headers with each req
  res.cookie(XSRF_TOKEN, token, {
    key: CSRF_TOKEN,
    secure: env === envTypes.PRODUCTION,
    sameSite: 'strict',
  });
  req.csrf = token;
  next();
};

export { createCSRFToken };
export default csrfProtection;
