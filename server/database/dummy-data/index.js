import dotenv from 'dotenv';
import createUsers from './users';
import createOrganisations from './organisations';
import createSections from '../dummy-data-prod/sections';
import createTopics from '../dummy-data-prod/topics';
import updateTheDefaultSectionsLogs from '../dummy-data-prod/update-the-default-sections-logs';
import organisationsSectionsOrders from './organisations-sections-orders';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.organisations = await createOrganisations(createdData);
  createdData.users = await createUsers(createdData);
  createdData.sections = await createSections();
  createdData.topics = await createTopics(createdData);
  createdData.organisationsSectionsOrders = await organisationsSectionsOrders(
    createdData,
  );

  await updateTheDefaultSectionsLogs();

  return createdData;
};

export default buildData;
