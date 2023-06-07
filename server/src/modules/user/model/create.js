import { query } from '../../../database';

const createUser = async (
  { firstName, lastName, email, backupEmail, password, role, organisationId },
  client,
) => {
  const sql = `
    INSERT INTO users(
      first_name,
      last_name,
      email,
      backup_email,
      password,
      role,
      organisation_id
    ) VALUES(
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7
    ) RETURNING *
  `;
  const values = [
    firstName,
    lastName,
    email,
    backupEmail,
    password,
    role,
    organisationId,
  ];

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { createUser };
