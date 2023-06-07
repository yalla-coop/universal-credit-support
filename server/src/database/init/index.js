import { readSqlFile } from '../connect';

const createTypes = async () => readSqlFile(`${__dirname}/types.sql`);
const createAutoTimestamps = async () =>
  readSqlFile(`${__dirname}/auto-timestamps.sql`);
const buildMigrations = async () => readSqlFile(`${__dirname}/migrations.sql`);

export default {
  createTypes,
  createAutoTimestamps,
  buildMigrations,
};
