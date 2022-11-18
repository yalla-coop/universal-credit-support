import Boom from '@hapi/boom';
import * as Section from '../model';
import { errorMsgs } from '../../../services/error-handler';

const getSection = async ({ id }) => {
  const section = await Section.findSectionById(id);
  if (!section) {
    throw Boom.notFound(errorMsgs.NOT_FOUND);
  }
  return section;
};

export default getSection;
