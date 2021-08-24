import Boom from '@hapi/boom';
import * as Organisation from '../model';
import { errorMsgs } from '../../../services/error-handler';

const updateOrganisation = async ({
  id,
  uniqueSlug,
  contactLinks,
  benefitCalculatorLink,
  benefitCalculatorLabel,
  colors,
  userId,
}) => {
  try {
    await Organisation.updateOrganisation({
      id,
      uniqueSlug,
      contactLinks,
      benefitCalculatorLink,
      benefitCalculatorLabel,
      colors,
    });
  } catch (error) {
    if (
      Number(error.code) === 23505 &&
      error.constraint === 'organisations_unique_slug_key'
    ) {
      throw Boom.conflict(errorMsgs.UNIQUE_LINK_IS_ALREADY_TAKEN, {
        field: 'uniqueSlug',
      });
    }
    throw error;
  }
};

export default updateOrganisation;
