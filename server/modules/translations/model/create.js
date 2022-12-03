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
    ) RETURNING *
  `;

  const values = [commonId, languageCode, content];

  const res = await query(sql, values);
  return res.rows[0];
};

export { createCommonI18n };
