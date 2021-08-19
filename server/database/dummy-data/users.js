import { query } from '../connect';
import * as T from '../../constants';
import dummyData from './dummy-data';

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
    firstName: dummyData.hydeSuperAdmin.firstName,
    lastName: dummyData.hydeSuperAdmin.lastName,
    email: dummyData.hydeSuperAdmin.email,
    backupEmail: dummyData.hydeSuperAdmin.backupEmail,
    password: dummyData.password,
    role: T.userRoles.SUPER_ADMIN,
  });
  const admin1 = await createUser({
    firstName: dummyData.admin1.firstName,
    lastName: dummyData.admin1.lastName,
    email: dummyData.admin1.email,
    backupEmail: dummyData.admin1.backupEmail,
    password: dummyData.password,
    role: T.userRoles.ADMIN,
  });

  return {
    superAdmin,
    admin1,
  };
};

export default createUsers;
