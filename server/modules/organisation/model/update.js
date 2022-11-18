import { query } from '../../../database';

const updateOrganisation = async (
  { id, organisationName, uniqueSlug, colors, logoId },
  client,
) => {
  const sql = `
    UPDATE organisations AS o
      SET
        organisation_name = COALESCE($2, o.organisation_name),
        unique_slug = COALESCE($3, o.unique_slug),
        colors = COALESCE($4, o.colors),
        logo_id = COALESCE($5, o.logo_id)
    FROM organisations AS old_org
    WHERE o.id = old_org.id AND o.id = $1
    RETURNING old_org.*
  `;
  const values = [id, organisationName, uniqueSlug, colors, logoId];

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { updateOrganisation };
