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

const findSectionById = async (id) => {
  const sql = `
    SELECT
      s.id,
      s.title,
      (
        SELECT
        s2.title
        FROM sections AS s2
        WHERE s2.id = s.parent_section_id
      ) AS parent_section_title
    FROM sections AS s
    WHERE s.id = $1
  `;

  const res = await query(sql, [id]);
  return res.rows[0];
};

const findTopicsBySectionId = async (id, lng) => {
  const sql = `
  SELECT
    topics.id,
    COALESCE (topics_i18n.content_i18n, topics.content) content,
    topics_i18n.language_code
  FROM topics
  LEFT OUTER JOIN topics_i18n
    ON topics.id = topics_i18n.topic_id 
   AND topics_i18n.language_code = $2
  WHERE topics.section_id = $1
  ORDER BY position ASC`;

  const res = await query(sql, [id, lng]);
  return res.rows;
};

export {
  getSectionsByOrgSlugForPublic,
  findSectionById,
  findTopicsBySectionId,
  getSubSectionsBySectionIdForPublic,
};
