import { query } from '../connect';

const deleteAuditLogs = async () => {
  const sql = `DELETE FROM content_audit_log`;
  const res = await query(sql);
  return res.rows[0];
};

const createNewAuditLogs = async () => {
  const sql = `UPDATE sections SET updated_at = NOW()`;
  const res = await query(sql);
  return res.rows;
};
const updateAuditLogs = async () => {
  const sql = `UPDATE content_audit_log SET type = 'ADD'`;
  const res = await query(sql);
  return res.rows;
};

const updateTheDefaultSectionsLogs = async () => {
  await deleteAuditLogs();
  await createNewAuditLogs();
  await updateAuditLogs();
};

export default updateTheDefaultSectionsLogs;
