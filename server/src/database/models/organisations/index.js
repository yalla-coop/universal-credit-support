import { readSqlFile } from '../../connect';

const createTable = async () => readSqlFile(`${__dirname}/schema.sql`);

export default {
  createTable,
};
