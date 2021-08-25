import Boom from '@hapi/boom';
import * as Organisation from '../model';

const getHelpDetails = async ({ orgLink }) => {
  const org = await Organisation.findHelpDetails(orgLink);
  if (!org) {
    throw Boom.notFound();
  }
  return org.contactLinks;
};

export default getHelpDetails;
