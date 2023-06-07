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
  organisationId,
}) => {
  const sql = `INSERT INTO users (
    first_name,
    last_name,
    email,
    backup_email,
    password,
    role,
    organisation_id
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
  ) RETURNING *`;
  const res = await query(sql, [
    firstName,
    lastName,
    email,
    backupEmail,
    password,
    role,
    organisationId,
  ]);
  return res.rows[0];
};

const createUsers = async ({ organisations }) => {
  const superAdmin = await createUser({
    firstName: dummyData.hydeSuperAdmin.firstName,
    lastName: dummyData.hydeSuperAdmin.lastName,
    email: dummyData.hydeSuperAdmin.email,
    backupEmail: dummyData.hydeSuperAdmin.backupEmail,
    password: dummyData.password,
    role: T.userRoles.SUPER_ADMIN,
    organisationId: organisations.superAdminOrganisation.id,
  });
  const admin1 = await createUser({
    firstName: dummyData.admin1.firstName,
    lastName: dummyData.admin1.lastName,
    email: dummyData.admin1.email,
    backupEmail: dummyData.admin1.backupEmail,
    password: dummyData.password,
    role: T.userRoles.ADMIN,
    organisationId: organisations.admin1Organisation.id,
  });

  return {
    superAdmin,
    admin1,
  };
};

export default createUsers;
