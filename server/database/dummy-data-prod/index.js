import dotenv from 'dotenv';
import createUsers from './users';
import createOrganisations from './organisations';
import createLandingPage from './landing-page-content';
import createSteps from './steps-content';
import createCommons from './common';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.organisations = await createOrganisations(createdData);
  createdData.users = await createUsers(createdData);
  createdData.landingPage = await createLandingPage();
  createdData.steps = await createSteps();
  createdData.common = await createCommons();

  return createdData;
};

export default buildData;
