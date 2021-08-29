import { query } from '../../../database';

const updateStep = async ({
  id,
  stage,
  stepOrder,
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
  isOptional,
}) => {
  const sql = `
    UPDATE steps
    SET
      stage = $2,
      step_order = $3,
      title = $4,
      description = $5,
      page_title = $6,
      page_description = $7,
      how_long_does_it_take = $8,
      where_do_you_need_to_go = $9,
      things_you_will_need = $10,
      what_you_will_need_to_know = $11,
      top_tip = $12,
      other_tips = $13,
      is_optional = $14
    WHERE id = $1
  `;

  const res = await query(sql, [
    id,
    stage,
    stepOrder,
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
    isOptional,
  ]);
  return res.rows[0];
};

export { updateStep };
