import { query } from '../../../database';

const createTopicI18n = async ({ topicId, languageCode, content }) => {
  const sql = `
    INSERT INTO topics_i18n (
      topic_id,
      language_code,
      content
    )
    VALUES(
      $1,
      $2,
      $3
    )
    ON CONFLICT (topic_id, language_code) DO NOTHING
    RETURNING *
  `;

  const values = [topicId, languageCode, content];

  const res = await query(sql, values);
  return res.rows[0];
};

const createCommonI18n = async ({ commonId, languageCode, content }) => {
  const sql = `
    INSERT INTO common_i18n (
      common_id,
      language_code,
      content
    )
    VALUES(
      $1,
      $2,
      $3
    )
    ON CONFLICT (common_id, language_code) DO NOTHING
    RETURNING *
  `;

  const values = [commonId, languageCode, content];

  const res = await query(sql, values);
  return res.rows[0];
};

const createSectionI18n = async ({ sectionId, languageCode, title }) => {
  const sql = `
    INSERT INTO sections_i18n (
      section_id,
      language_code,
      title
    )
    VALUES(
      $1,
      $2,
      $3
    )
    ON CONFLICT (section_id, language_code) DO NOTHING
    RETURNING *
  `;
  const values = [sectionId, languageCode, title];

  const res = await query(sql, values);
  return res.rows[0];
};

export { createTopicI18n, createCommonI18n, createSectionI18n };
