import Boom from '@hapi/boom';
import moment from 'moment';
import * as User from '../model';

import { hashPassword } from '../../../helpers';
import { errorMsgs } from '../../../services/error-handler';
import { validatePassword } from '../utils';

import { getClient } from '../../../database/connect';

const updatePassword = async ({ token, password }) => {
  const client = await getClient();

  try {
    await client.query('BEGIN');

    await validatePassword({ password });

    const user = await User.findUserByResetToken(token);
    if (!user) {
      throw Boom.notFound(errorMsgs.INVALID_RESET_TOKEN);
    }

    const expired = moment().isAfter(user.resetPasswordExpiry);

    if (expired) {
      throw Boom.notFound(errorMsgs.INVALID_RESET_TOKEN);
    }

    const hashedPassword = await hashPassword(password);

    await User.updatePassword(
      { password: hashedPassword, userId: user.id },
      client,
    );
    await client.query('COMMIT');
    return;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

export default updatePassword;
