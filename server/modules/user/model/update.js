import { query } from '../../../database';
import { userStatuses } from '../../../constants';

const updateUserRole = async ({ role, id }) => {
  const sql = `
    UPDATE users
    SET
      role = $1
    WHERE id = $2
    RETURNING *
  `;
  const values = [role, id];

  const res = await query(sql, values);
  return res.rows[0];
};

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

const updatePassword = async ({ password, userId }, client) => {
  const values = [password, userId];

  const sql = `
    UPDATE users
    SET
      password = $1,
      reset_password_expiry = NOW()
    WHERE
      id = $2
    RETURNING
      first_name,
      email
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

const updateUser = async (
  { id, firstName, lastName, email, backupEmail },
  client,
) => {
  const values = [id, firstName, lastName, email, backupEmail];

  const sql = `
    UPDATE users
    SET
      first_name = $2,
      last_name = $3,
      email = $4,
      backup_email = $5
    WHERE
      id = $1
    RETURNING *
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

const updateUserToDeleted = async (id, client) => {
  const values = [id, userStatuses.DELETED];

  const sql = `
    UPDATE users
    SET
      first_name = NULL,
      last_name = NULL,
      email = NULL,
      backup_email = NULL,
      password = NULL,
      reset_password_token = NULL,
      status = $2
    WHERE
      id = $1;
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

export {
  updateUserNewResetPasswordToken,
  updatePassword,
  updateUser,
  updateUserRole,
  updateUserToDeleted,
};
