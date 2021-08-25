import Boom from '@hapi/boom';
import * as Organisation from '../model';

const getBenefitCalculator = async ({ orgLink }) => {
  const org = await Organisation.findBenefitCalculator(orgLink);
  if (!org) {
    throw Boom.notFound();
  }
  return org;
};

export default getBenefitCalculator;
