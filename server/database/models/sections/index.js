import { readSqlFile } from '../../connect';

const createTable = async () => readSqlFile(`${__dirname}/schema.sql`);

const createTriggers = async () => {
  await readSqlFile(
    `${__dirname}/delete-old-sections-i18n-on-update-title.sql`,
  );
};

export default {
  createTable,
  createTriggers,
};
