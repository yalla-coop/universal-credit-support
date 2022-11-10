import { query } from '../../../database';

const getSections = async () => {
  const sql = `
    SELECT
      s.id,
      s.stage,
      s.title,
      s.description,
      s.page_title,
      s.page_description,
      s.how_long_does_it_take,
      s.where_do_you_need_to_go,
      s.things_you_will_need,
      s.what_you_will_need_to_know,
      s.top_tip,
      s.other_tips,
      s.is_optional
    FROM sections AS s
    ORDER BY position ASC
  `;

  const res = await query(sql);
  return res.rows;
};

const getSectionById = async (id) => {
  const sql = `
    SELECT
      s.id,
      s.stage,
      s.title,
      s.description,
      s.page_title,
      s.page_description,
      s.how_long_does_it_take,
      s.where_do_you_need_to_go,
      s.things_you_will_need,
      s.what_you_will_need_to_know,
      s.top_tip,
      s.other_tips,
      s.is_optional
    FROM sections AS s
    WHERE id = $1
  `;

  const res = await query(sql, [id]);
  return res.rows[0];
};

export { getSections, getSectionById };
