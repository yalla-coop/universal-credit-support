import Boom from '@hapi/boom';
import * as Organisation from '../model';

const getHelpDetails = async ({ uniqueSlug }) => {
  const org = await Organisation.findHelpDetails(uniqueSlug);
  if (!org) {
    throw Boom.notFound();
  }
  return org.contactLinks;
};

export default getHelpDetails;
