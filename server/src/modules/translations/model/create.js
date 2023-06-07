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
  allFieldsTranslated,
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
      other_tips,
      all_fields_translated
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
      $12,
      $13
    )
    ON CONFLICT (step_id, language_code) DO UPDATE SET
      title = COALESCE($3, steps_i18n.title),
      description = COALESCE($4, steps_i18n.description),
      page_title = COALESCE($5, steps_i18n.page_title),
      page_description = COALESCE($6, steps_i18n.page_description),
      how_long_does_it_take = COALESCE($7, steps_i18n.how_long_does_it_take),
      where_do_you_need_to_go = COALESCE($8, steps_i18n.where_do_you_need_to_go),
      things_you_will_need = COALESCE($9, steps_i18n.things_you_will_need),
      what_you_will_need_to_know = COALESCE($10, steps_i18n.what_you_will_need_to_know),
      top_tip = COALESCE($11, steps_i18n.top_tip),
      other_tips = COALESCE($12, steps_i18n.other_tips),
      all_fields_translated = COALESCE($13, steps_i18n.all_fields_translated)
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
    allFieldsTranslated,
  ];

  const res = await query(sql, values);
  return res.rows[0];
};

export { createCommonI18n, createLandingPageI18n, createStepI18n };
