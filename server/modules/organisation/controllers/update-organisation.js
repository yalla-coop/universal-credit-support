import { updateOrganisation as updateOrganisationUseCase } from '../use-cases';

const updateOrganisation = async (req, res, next) => {
  try {
    const { organisationId: userOrganisationId } = req.user;
    const { id } = req.params;
    const {
      uniqueSlug,
      contactLinks,
      benefitCalculatorLink,
      benefitCalculatorLabel,
      colors,
      logoFile,
    } = req.body;
    const results = await updateOrganisationUseCase({
      id,
      uniqueSlug,
      contactLinks,
      benefitCalculatorLink,
      benefitCalculatorLabel,
      colors,
      logoFile,
      userOrganisationId,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default updateOrganisation;
