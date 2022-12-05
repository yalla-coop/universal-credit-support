import { query } from '../../../database';

const updateSection = async ({ id, title, updatedBy }, client) => {
  const sql = `
    UPDATE sections
    SET title = $2,
    updated_by = $3
    WHERE id = $1
    RETURNING *;
  `;

  const res = await query(sql, [id, title, updatedBy], client);
  return res.rows[0];
};

const updateSectionOrder = async (
  { id, organisationId, position, hidden, approvalStatus },
  client,
) => {
  console.log({ id, organisationId, position, hidden, approvalStatus });
  const sql = `
    UPDATE organisations_sections_orders
    SET
      position = COALESCE($3, position),
      hidden = COALESCE($4, hidden),
      approval_status = COALESCE($5, approval_status)
    WHERE section_id = $1 AND organisation_id = $2

  `;

  const res = await query(
    sql,
    [id, organisationId, position, hidden, approvalStatus],
    client,
  );
  return res.rows[0];
};

const updateTopicById = async ({ id, content }, client) => {
  const sql = `
    UPDATE topics
    SET content = $2
    WHERE id = $1
    RETURNING *;
  `;
  const res = await query(sql, [id, content], client);
  return res.rows[0];
};

export { updateSection, updateTopicById, updateSectionOrder };
