import dotenv from 'dotenv';
import createUsers from './users';
import createOrganisations from './organisations';
import createSections from './sections';
import createTopics from './topics';
import updateTheDefaultSectionsLogs from './update-the-default-sections-logs';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.organisations = await createOrganisations(createdData);
  createdData.users = await createUsers(createdData);
  createdData.sections = await createSections();
  createdData.topics = await createTopics(createdData);
  await updateTheDefaultSectionsLogs();

  return createdData;
};

export default buildData;
