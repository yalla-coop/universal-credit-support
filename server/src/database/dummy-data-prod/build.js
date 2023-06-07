import buildData from './index';
import buildTables from '../build-tables';

// Production data build
const build = async () => {
  await buildTables();

  // build production data
  const createdData = await buildData();
  return createdData;
};

export default build;
