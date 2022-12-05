import { query } from '../../../database';
import { userStatuses } from '../../../constants';

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
      organisation_id,
      created_at,
      updated_at
    FROM users
    WHERE email = $1 AND status = $2
  `;
  const values = [email, userStatuses.ACTIVE];

  const res = await query(sql, values);
  return res.rows[0];
};

const findUserById = async (id) => {
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
      organisation_id,
      created_at,
      updated_at
    FROM users
    WHERE id = $1 AND status = $2
  `;
  const values = [id, userStatuses.ACTIVE];

  const res = await query(sql, values);
  return res.rows[0];
};

const getUsers = async () => {
  const sql = `
    SELECT
      u.id,
      u.first_name,
      u.last_name,
      u.email,
      u.backup_email,
      u.password,
      u.role,
      u.status,
      u.reset_password_token,
      u.reset_password_expiry,
      u.organisation_id,
      u.created_at,
      u.updated_at,
      o.organisation_name,
      o.status as organisation_status
    FROM users u
    LEFT JOIN organisations o ON u.organisation_id = o.id
    WHERE role IN ('ADMIN', 'SUPER_ADMIN') AND u.status = $1
  `;

  const res = await query(sql, [userStatuses.ACTIVE]);
  return res.rows;
};

const findUserWithOrgDetails = async (id) => {
  const sql = `
    SELECT
      u.id,
      u.first_name,
      u.last_name,
      u.email,
      u.backup_email,
      u.password,
      u.role,
      u.status,
      u.reset_password_token,
      u.reset_password_expiry,
      u.organisation_id,
      u.created_at,
      u.updated_at,
      o.organisation_name,
      o.status as organisation_status,
      o.unique_slug,
      o.type_of_organisation,
      o.id as organisation_id
    FROM users u
    LEFT JOIN organisations o ON u.organisation_id = o.id
    WHERE u.id = $1
  `;

  const res = await query(sql, [id]);
  return res.rows[0];
};

const findUserByResetToken = async (token, client) => {
  const values = [token, userStatuses.ACTIVE];
  const sql = `
  SELECT
    id,
    reset_password_expiry
  FROM users
    WHERE reset_password_token = $1 AND status = $2
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

const findSuperAdminByOrgUniqueSlug = async (uniqueSlug) => {
  const sql = `
    SELECT
      u.id,
      u.first_name,
      u.last_name,
      u.email,
      u.organisation_id,
      o.organisation_name
    FROM users u
    LEFT JOIN organisations o ON u.organisation_id = o.id
    WHERE o.unique_slug = $1 AND u.role = 'SUPER_ADMIN'
  `;
  const values = [uniqueSlug];

  const res = await query(sql, values);
  return res.rows[0];
};

export {
  findUserByEmail,
  findUserById,
  findUserByResetToken,
  getUsers,
  findUserWithOrgDetails,
  findSuperAdminByOrgUniqueSlug,
};
