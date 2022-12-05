import { readSqlFile } from '../../connect';

const createTable = async () => readSqlFile(`${__dirname}/schema.sql`);
const createTriggers = async () => {
  await readSqlFile(
    `${__dirname}/insert-content-audit-log-on-change-section.trigger.sql`,
  );
};
export default {
  createTable,
  createTriggers,
};
