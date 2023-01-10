import { query } from '../../../database';

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

const createLandingPageI18n = async ({
  landingPageContentId,
  languageCode,
  headline,
  subtitle,
  instructions,
}) => {
  const sql = `
    INSERT INTO landing_page_content_i18n (
      landing_page_content_id,
      language_code,
      headline,
      subtitle,
      instructions
    ) VALUES(
      $1,
      $2,
      $3,
      $4,
      $5
    )
    ON CONFLICT (landing_page_content_id, language_code) DO NOTHING
    RETURNING *
  `;

  const values = [
    landingPageContentId,
    languageCode,
    headline,
    subtitle,
    instructions,
  ];

  const res = await query(sql, values);
  return res.rows[0];
};

const createStepI18n = async ({
  stepId,
  languageCode,
  title,
  description,
  pageTitle,
  pageDescription,
  howLongDoesItTake,
  whereDoYouNeedToGo,
  thingsYouWillNeed,
  whatYouWillNeedToKnow,
  topTip,
  otherTips,
}) => {
  const sql = `
    INSERT INTO steps_i18n (
      step_id,
      language_code,
      title,
      description,
      page_title,
      page_description,
      how_long_does_it_take,
      where_do_you_need_to_go,
      things_you_will_need,
      what_you_will_need_to_know,
      top_tip,
      other_tips
    ) VALUES(
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7,
      $8,
      $9,
      $10::jsonb[],
      $11,
      $12
    )
    ON CONFLICT (step_id, language_code) DO NOTHING
    RETURNING *
  `;

  const values = [
    stepId,
    languageCode,
    title,
    description,
    pageTitle,
    pageDescription,
    howLongDoesItTake,
    whereDoYouNeedToGo,
    thingsYouWillNeed,
    whatYouWillNeedToKnow,
    topTip,
    otherTips,
  ];

  const res = await query(sql, values);
  return res.rows[0];
};

export { createCommonI18n, createLandingPageI18n, createStepI18n };
