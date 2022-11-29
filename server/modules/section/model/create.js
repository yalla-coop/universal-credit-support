import { query } from '../../../database';

const createTopicI18n = async ({ topicId, languageCode, content }) => {
  const sql = `
    INSERT INTO topics_i18n (
      topic_id,
      language_code,
      content_i18n
    )
    VALUES(
      $1,
      $2,
      $3
    ) RETURNING *
  `;

  const values = [topicId, languageCode, content];

  const res = await query(sql, values);
  return res.rows[0];
};

export { createTopicI18n };
