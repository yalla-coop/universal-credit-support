import { updateOrganisation as updateOrganisationUseCase } from '../use-cases';

const updateOrganisation = async (req, res, next) => {
  // const { id: userId } = req.user;
  const { id } = req.params;
  const { uniqueSlug } = req.body;
  try {
    const results = await updateOrganisationUseCase({
      id,
      uniqueSlug,
      // userId,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default updateOrganisation;
