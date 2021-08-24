import Boom from '@hapi/boom';
import * as Organisation from '../model';

const getHelpDetails = async ({ orgLink }) => {
  const org = await Organisation.findHelpDetails(orgLink);
  console.log('ORG', org);
  if (!org) {
    throw Boom.notFound();
  }
  return org.contactLinks;
};

export default getHelpDetails;
