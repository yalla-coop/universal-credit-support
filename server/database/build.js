import buildTables from './build-tables';

import buildData from './dummy-data';

// development data build
const build = async () => {
  await buildTables();

  // build dummy data
  const createdData = await buildData();
  return createdData;
};

export default build;
