import { getOrganisation as getOrganisationUseCase } from '../use-cases';

const getOrganisation = async (req, res, next) => {
  try {
    const { organisationId: userOrganisationId } = req.user;
    const { id } = req.params;

    const results = await getOrganisationUseCase({
      id,
      userOrganisationId,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getOrganisation;
