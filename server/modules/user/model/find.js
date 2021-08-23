import { query } from '../../../database';

const findUserByEmail = async (email) => {
  const sql = `
    SELECT
      id,
      first_name,
      last_name,
      email,
      backup_email,
      password,
      role,
      status,
      reset_password_token,
      reset_password_expiry,
      created_at,
      updated_at
    FROM users
    WHERE email = $1
  `;
  const values = [email];

  const res = await query(sql, values);
  return res.rows[0];
};

export { findUserByEmail };
