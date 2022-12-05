import * as User from '../model';

import sendEmail from '../../../services/mailing';
import * as templatesId from '../../../services/mailing/templates/templates-constants';
import { appLinks } from '../../../constants';

const crypto = require('crypto');

const { SET_PASSWORD } = appLinks;

const resetPasswordLink = async ({ email, resetByAdmin }) => {
  const user = await User.findUserByEmail(email);
  if (!user) return;

  const buffer = crypto.randomBytes(32);
  const token = buffer.toString('hex');

  await User.updateUserNewResetPasswordToken({
    userId: user.id,
    resetPasswordToken: token,
  });
  if (resetByAdmin) {
    sendEmail(
      templatesId.ORG_EMAIL_UPDATED,
      { to: user.email },
      {
        name: user.firstName,
        link: SET_PASSWORD.replace(':token', token),
      },
    );
  } else {
    sendEmail(
      templatesId.RESET_PASSWORD,
      { to: user.email },
      {
        name: user.firstName,
        link: SET_PASSWORD.replace(':token', token),
      },
    );
  }
};

export default resetPasswordLink;
