import { getOrganisationByUniqueSlug as getOrganisationByUniqueSlugUseCase } from '../use-cases';

const getOrganisationByUniqueSlug = async (req, res, next) => {
  const { uniqueSlug } = req.params;

  try {
    const results = await getOrganisationByUniqueSlugUseCase({
      uniqueSlug,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getOrganisationByUniqueSlug;
