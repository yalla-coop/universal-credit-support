import * as ChangesLog from '../model';

const getAuditLogs = async () => {
  const changes = await ChangesLog.getChangesLog();
  return changes;
};

export default getAuditLogs;
