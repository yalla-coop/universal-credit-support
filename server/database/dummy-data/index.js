import dotenv from 'dotenv';
import createUsers from './users';
import createOrganisations from './organisations';
import createLandingPage from '../dummy-data-prod/landingPageContent';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.users = await createUsers(createdData);
  createdData.organisations = await createOrganisations(createdData);
  createdData.landingPage = await createLandingPage(createdData);

  return createdData;
};

export default buildData;
