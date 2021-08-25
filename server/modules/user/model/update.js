import { query } from '../../../database';

const updateUserNewResetPasswordToken = async (
  { resetPasswordToken, userId },
  client,
) => {
  const sql = `
    UPDATE users SET
      reset_password_token = $2,
      reset_password_expiry = NOW() + INTERVAL '1 DAY'
    WHERE id = $1
    RETURNING *
  `;
  const values = [userId, resetPasswordToken];

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { updateUserNewResetPasswordToken };
