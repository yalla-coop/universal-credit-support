import * as models from './models';
import init from './init';

// For both production and development
const buildTables = async () => {
  await init.createTypes();
  await init.createAutoTimestamps();
  await init.buildMigrations();

  await models.common.createTable();
  await models.commonI18n.createTable();
  await models.media.createTable();
  await models.organisations.createTable();
  await models.users.createTable();
  await models.sections.createTable();
  await models.sectionsI18n.createTable();
  await models.topics.createTable();
  await models.topicsI18n.createTable();
  await models.organisationsSectionsOrders.createTable();
  await models.organisationsResources.createTable();
  await models.contentAuditLog.createTable();

  await models.contentAuditLog.createTriggers();
  await models.topics.createTriggers();
  await models.sections.createTriggers();
  await models.common.createTriggers();
};

export default buildTables;
