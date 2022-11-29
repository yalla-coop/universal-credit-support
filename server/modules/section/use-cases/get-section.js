import Boom from '@hapi/boom';
import * as Section from '../model';
import { errorMsgs } from '../../../services/error-handler';
import { userRoles } from '../../../constants';

const getSection = async ({ id, forPublic, role }) => {
  const section = await Section.findSectionById(id);
  if (!section) {
    throw Boom.notFound(errorMsgs.NOT_FOUND);
  }

  // if not for public and section is default, only super admins can access it
  if (!forPublic && section.defaultPosition && role !== userRoles.SUPER_ADMIN) {
    throw Boom.unauthorized(errorMsgs.UNAUTHORISED);
  }

  return section;
};

export default getSection;
