import { query } from '../../../database';

const getSectionsByOrgSlugForPublic = async (uniqueSlug) => {
  const sql = `
    SELECT
      s.id,
      s.title,
      (
        SELECT
          COUNT(*)
        FROM
          sections AS s2
        WHERE s2.parent_section_id = s.id
      ) > 0 AS has_sub_sections
    FROM organisations AS o
    INNER JOIN organisations_sections_orders AS oso
      ON o.id = oso.organisation_id
    INNER JOIN sections AS s
      ON oso.section_id = s.id
    WHERE o.unique_slug = $1 AND oso.hidden = false AND s.parent_section_id IS NULL
    ORDER BY oso.position ASC
  `;

  const res = await query(sql, [uniqueSlug]);
  return res.rows;
};

const getSubSectionsBySectionIdForPublic = async (id) => {
  const sql = `
    SELECT 
      *,
      (
        SELECT
            ARRAY_AGG (
            jsonb_build_object(
              'id',  s.id,
            'title', s.title,
            'position', s.default_position
            )
          ORDER BY s.default_position
          ) AS children_sections
      
          FROM sections AS s
          WHERE parent_section_id = $1
      ) FROM sections where id = $1
  `;

  const res = await query(sql, [id]);
  return res.rows[0];
};

const getSectionById = async (id) => {
  const sql = `
    SELECT
      s.id
    FROM sections AS s
    WHERE id = $1
  `;

  const res = await query(sql, [id]);
  return res.rows[0];
};

export {
  getSectionsByOrgSlugForPublic,
  getSectionById,
  getSubSectionsBySectionIdForPublic,
};
