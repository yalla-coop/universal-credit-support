import { query } from '../../../database';

const getCommon = async (lng) => {
  const sql = `
  SELECT
    common.id,
    COALESCE (common_i18n.content_i18n, common.content) content,
    common_i18n.language_code
  FROM common
  LEFT OUTER JOIN common_i18n
    ON common.id = common_i18n.common_id 
   AND common_i18n.language_code = $2
  WHERE common.id = $1
`;
  const res = await query(sql, [1, lng]);
  return res.rows;
};

export { getCommon };
