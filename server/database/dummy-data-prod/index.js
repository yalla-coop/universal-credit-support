import dotenv from 'dotenv';
import createUsers from './users';
import createOrganisations from './organisations';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.users = await createUsers(createdData);
  createdData.organisations = await createOrganisations(createdData);

  return createdData;
};

export default buildData;
