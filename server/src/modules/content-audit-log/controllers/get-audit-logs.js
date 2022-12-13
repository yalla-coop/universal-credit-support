import * as changesLog from '../use-cases';

const getAuditLog = async (req, res, next) => {
  try {
    const getAuditLogs = await changesLog.getAuditLogs({});
    res.json(getAuditLogs);
  } catch (error) {
    next(error);
  }
};

export default getAuditLog;
