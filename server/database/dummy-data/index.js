import dotenv from 'dotenv';
import createUsers from './users';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.users = await createUsers(createdData);

  return createdData;
};

export default buildData;
