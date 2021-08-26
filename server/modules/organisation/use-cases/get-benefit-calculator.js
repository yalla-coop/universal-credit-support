import Boom from '@hapi/boom';
import * as Organisation from '../model';

const getBenefitCalculator = async ({ uniqueSlug }) => {
  const org = await Organisation.findBenefitCalculator(uniqueSlug);
  if (!org) {
    throw Boom.notFound();
  }
  return org;
};

export default getBenefitCalculator;
