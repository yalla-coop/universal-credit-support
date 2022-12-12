import Boom from '@hapi/boom';
import * as User from '../model';
import { errorMsgs } from '../../../services/error-handler';

const getUserById = async ({ id, withOrgDetails }) => {
  if (withOrgDetails) {
    const data = await User.findUserWithOrgDetails(id);

    return data;
  }

  throw Boom.notFound(errorMsgs.NOT_FOUND);
};

export default getUserById;
