import { query } from '../connect';
import * as T from '../../constants';
import prodData from './prod-data';

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

const createUsers = async () => {
  const superAdmin = await createUser({
    firstName: prodData.hydeSuperAdmin.firstName,
    lastName: prodData.hydeSuperAdmin.lastName,
    email: prodData.hydeSuperAdmin.email,
    backupEmail: prodData.hydeSuperAdmin.backupEmail,
    password: prodData.password,
    role: T.userRoles.SUPER_ADMIN,
  });

  return {
    superAdmin,
  };
};

export default createUsers;
