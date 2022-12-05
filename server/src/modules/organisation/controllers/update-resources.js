import { updateResources as updateResourcesUseCase } from '../use-cases';

const updateResources = async (req, res, next) => {
  try {
    const { organisationId: userOrganisationId } = req.user;
    const { id } = req.params;
    const { resources } = req.body;

    const results = await updateResourcesUseCase({
      id,
      userOrganisationId,
      resources,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default updateResources;
