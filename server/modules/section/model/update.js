import { query } from '../../../database';

const updateSection = async ({
  id,
  stage,
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
  userId,
}) => {
  const sql = `
    UPDATE sections
    SET
      stage = $2,
      title = $3,
      description = $4,
      page_title = $5,
      page_description = $6,
      how_long_does_it_take = $7,
      where_do_you_need_to_go = $8,
      things_you_will_need = $9,
      what_you_will_need_to_know = $10,
      top_tip = $11,
      other_tips = $12,
      is_optional = $13,
      updated_by = $14
    WHERE id = $1
  `;

  const res = await query(sql, [
    id,
    stage,
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
    userId,
  ]);
  return res.rows[0];
};

export { updateSection };
