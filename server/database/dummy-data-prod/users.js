import { query } from '../connect';
import * as T from '../../constants';

const createUser = async ({
  firstName,
  lastName,
  email,
  backupEmail,
  password,
  role,
}) => {
  const sql = `INSERT INTO users (
    first_name,
    last_name,
    email,
    backup_email,
    password,
    role
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
  ) RETURNING *`;
  const res = await query(sql, [
    firstName,
    lastName,
    email,
    backupEmail,
    password,
    role,
  ]);
  return res.rows[0];
};

// 123456Aa password
const password = '$2a$08$23ik.euo.8EM.tqkX/43ke539bnaWX/2vK8nsbrdlYl0UhGMwCR92';

const createUsers = async () => {
  const superAdmin = await createUser({
    firstName: 'super',
    lastName: 'admin',
    email: 'superadmin@hyde.co.uk',
    backupEmail: 'superadmin@hyde.co.uk',
    password,
    role: T.userRoles.SUPER_ADMIN,
  });

  return {
    superAdmin,
  };
};

export default createUsers;
