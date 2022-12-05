/* eslint-disable camelcase */
import moment from 'moment';
import config from '../../../config';

const roles = {
  ADMIN: 'Admin',
  SUPER_ADMIN: 'Super Admin',
};
const statuses = {
  APPROVED: 'Active',
  REJECTED: 'Rejected',
  AWAITING_APPROVAL: 'Awaiting Approval',
};

const { domain } = config.server;
const organisations = [
  { label: 'First name', value: 'first_name' },
  { label: 'Last name', value: 'last_name' },
  { label: 'Role', value: (row) => roles[row.role] },
  { label: 'Email address', value: 'email' },
  { label: 'Backup email', value: 'backup_email' },
  { label: 'Organisation', value: 'organisation_name' },
  { label: 'Type of organisation', value: 'type_of_organisation' },
  { label: 'Status', value: (row) => statuses[row.organisation_status] },
  {
    label: 'Unique link',
    value: (row) => `${domain}${row.unique_slug}`,
  },
  {
    label: 'Sign up date',
    value: (row) => moment(row.created_at).format('DD MMMM YYYY'),
  },
];

export { organisations };
