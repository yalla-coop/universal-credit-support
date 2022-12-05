import { query } from '../../../database';

const deleteResourcesNotInKeys = async ({ organisationId, keys }) => {
  const sql = `
    DELETE FROM organisations_resources
    WHERE organisation_id = $1
    AND key != ALL($2)
  `;
  const values = [organisationId, keys];

  const res = await query(sql, values);
  return res.rows;
};

export { deleteResourcesNotInKeys };
