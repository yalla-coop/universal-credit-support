import { getOrganisation as getOrganisationUseCase } from '../use-cases';

const getOrganisation = async (req, res, next) => {
  // const { id: userId } = req.user;
  const { id } = req.params;
  const { uniqueSlug } = req.body;
  try {
    const results = await getOrganisationUseCase({
      id,
      uniqueSlug,
      userId: 1,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getOrganisation;
