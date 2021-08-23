import Boom from '@hapi/boom';
// import axios from 'axios';

import * as User from '../model';

import { errorMsgs } from '../../../services/error-handler';
import { verifyPassword } from '../../../helpers';
// import { userRoles, envTypes } from '../../../constants';
// import config from '../../../config';
// import checkTherapistProfile from './check-therapist-profile';
// import { rateLimiter } from '../utils';

// const { env, recaptchaSecretKey } = config.common;
// const maxConsecutiveFailsByEmail = 5;

const login = async ({ email, password /* reToken */ }) => {
  // try {
  const user = await User.findUserByEmail(email);
  if (!user) {
    throw Boom.unauthorized(errorMsgs.INVALID_EMAIL_OR_PASSWORD);
  }

  const isPasswordValid = await verifyPassword(password, user.password);

  if (!isPasswordValid) {
    throw Boom.unauthorized(errorMsgs.INVALID_EMAIL_OR_PASSWORD);
  }

  user.hasOrganisation = true; // TODO: check if all required fields in org are filled or not, if not set this to false so redirect them to fill

  user.password = null;
  return user;
  // } catch (error) {
  //   if (env === envTypes.PRODUCTION) {
  //     const score = 1;

  // const { data } = await axios.post(
  //   'https://www.google.com/recaptcha/api/siteverify',
  //   {},
  //   {
  //     params: { secret: recaptchaSecretKey, response: reToken },
  //   },
  // );

  // if (!data.success) {
  //   throw Boom.badData(errorMsgs.INVALID_TOKEN);
  // }

  // score = data.score;

  // try {
  // const limiterConsecutiveFailsByEmail = await rateLimiter({
  //   keyPrefix: 'login_fail_consecutive_email',
  //   points: maxConsecutiveFailsByEmail,
  //   duration: 60 * 60 * 3, // Store number for three hours since first fail
  //   blockDuration: 60 * 15 + 10, // Block for 15 minutes
  // });
  // if (score < 0.3) {
  //   // add 5 points to force the limiter to throw error
  //   await limiterConsecutiveFailsByEmail.consume(email, 5);
  // }
  // await limiterConsecutiveFailsByEmail.consume(email);
  // } catch (err) {
  // send email only once
  // if (err.consumedPoints === 6) {
  //   // // TODO: send warning email
  // const user = await User.findUserByEmail(email);
  // if (user) {
  //   // sendEmail(
  //   //   'suspicious_login',
  //   //   { to: email },
  //   //   {
  //   //     name: user.firstName,
  //   //     resetLink: forgetPassword,
  //   //     time: moment().toLocaleString(),
  //   //     userAgent,
  //   //     ip,
  //   //   },
  //   // );
  // }
  //   }
  //   const tryAfter = Math.round(err.msBeforeNext / 1000) || 1;
  //   const timeBeforeNextTrial = secondsToHms(tryAfter);
  //   throw Boom.tooManyRequests(
  //     errorMsgs.TOO_MANY_REQUESTS.replace('{time}', timeBeforeNextTrial),
  //   );
  // }
  //   }
  //   throw error;
  // }
};

export default login;
