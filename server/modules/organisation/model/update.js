import { query } from '../../../database';

const updateOrganisation = async ({ id, uniqueSlug }) => {
  const sql = `
    UPDATE organisations
      SET
        unique_slug = $2
    WHERE id = $1
  `;
  const values = [id, uniqueSlug];

  const res = await query(sql, values);
  return res.rows[0];
};

export { updateOrganisation };
