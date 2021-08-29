import { getOrganisation as getOrganisationUseCase } from '../use-cases';

const getOrganisation = async (req, res, next) => {
  try {
    const { id: userId, organisationId: userOrganisationId } = req.user;
    const { id } = req.params;
    const { uniqueSlug } = req.body;
    const results = await getOrganisationUseCase({
      id,
      uniqueSlug,
      userId,
      userOrganisationId,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getOrganisation;
