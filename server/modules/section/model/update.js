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

export { updateSection, updateTopicById };
