import { getOrganisations as getOrganisationsUseCase } from '../use-cases';

const getOrganisations = async (req, res, next) => {
  try {
    const { status } = req.query;
    const organisations = await getOrganisationsUseCase({
      status,
    });

    res.json(organisations);
  } catch (error) {
    next(error);
  }
};

export default getOrganisations;
