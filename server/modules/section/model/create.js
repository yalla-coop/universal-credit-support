import { query } from '../../../database';

const createSection = async ({ title, createdBy }, client) => {
  const sql = `
    INSERT INTO sections (title, created_by)
    VALUES ($1, $2)
    RETURNING *;
  `;

  const res = await query(sql, [title, createdBy], client);
  return res.rows[0];
};

const createTopics = async ({ sectionId, topics }, client) => {
  const sql = `
    INSERT INTO topics (section_id, content, position)
    SELECT * FROM UNNEST($1::INTEGER[], $2::JSONB[], $3::INTEGER[])
    RETURNING *;
  `;
  const values = [
    topics.map(() => sectionId),
    topics.map((e) => e.content),
    topics.map((_, i) => i),
  ];
  const res = await query(sql, values, client);
  return res.rows;
};

// add a new section for organisation, and the position will be the last one
const createOrganisationSectionOrder = async (
  { sectionId, organisationId },
  client,
) => {
  const sql = `
    INSERT INTO organisations_sections_orders (section_id, organisation_id, position)
      VALUES ($1, $2, (SELECT position FROM organisations_sections_orders WHERE organisation_id = $2 ORDER BY position DESC LIMIT 1) +1 )
    RETURNING *;
  `;
  const res = await query(sql, [sectionId, organisationId], client);
  return res.rows[0];
};

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
    ) RETURNING *
  `;

  const values = [topicId, languageCode, content];

  const res = await query(sql, values);
  return res.rows[0];
};

export {
  createTopicI18n,
  createSection,
  createTopics,
  createOrganisationSectionOrder,
};
