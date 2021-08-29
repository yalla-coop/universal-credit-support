import { query } from '../../../database';

const deleteUser = async (id) => {
  const sql = `
  DELETE FROM users
  WHERE id = $1;
  `;

  await query(sql, [id]);
};
export { deleteUser };
