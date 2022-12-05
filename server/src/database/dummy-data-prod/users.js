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
    firstName: prodData.hydeSuperAdmin.firstName,
    lastName: prodData.hydeSuperAdmin.lastName,
    email: prodData.hydeSuperAdmin.email,
    backupEmail: prodData.hydeSuperAdmin.backupEmail,
    password: prodData.password,
    role: T.userRoles.SUPER_ADMIN,
    organisationId: organisations.HydeOrganisation.id,
  });

  return {
    superAdmin,
  };
};

export default createUsers;
