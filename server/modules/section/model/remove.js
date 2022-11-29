import { query } from '../../../database';

const deleteTopicsBySectionId = async (
  { sectionId, topicIdsToKeep },
  client,
) => {
  const sql = `
   DELETE FROM topics
    WHERE section_id = $1
    AND id != ALL($2)
    RETURNING *;
  `;

  const res = await query(sql, [sectionId, topicIdsToKeep], client);
  return res.rows[0];
};

export { deleteTopicsBySectionId };
