import QueryStream from 'pg-query-stream';

const findOrganisations = ({ client, start, end } = {}) => {
  const sql = `
    SELECT
      u.first_name,
      u.last_name,
      u.email,
      u.backup_email,
      u.role,
      u.created_at,
      o.organisation_name,
      o.type_of_organisation,
      o.unique_slug,
      o.status AS organisation_status
    FROM users AS u
    INNER JOIN organisations AS o ON o.id = u.organisation_id
    WHERE u.id <= $2 AND u.id > $1 AND u.status = 'ACTIVE'
  `;
  const _query = new QueryStream(sql, [start, end]);
  return client.query(_query);
};

export { findOrganisations };
