import { query } from '../connect';
import * as T from '../../constants';

const createCommonI18n = async ({ commonId, languageCode, content }) => {
  const sql = `INSERT INTO common_i18n (
    common_id,
    language_code,
    content
  ) VALUES (
    $1,
    $2,
    $3
  ) RETURNING *`;
  const res = await query(sql, [commonId, languageCode, content]);
  return res.rows[0];
};

const addCommonI18n = async () => {};

export default addCommonI18n;
