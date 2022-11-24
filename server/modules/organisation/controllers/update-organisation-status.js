import { updateOrganisationStatus as updateOrganisationStatusUseCase } from '../use-cases';

const updateOrganisationStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const organisations = await updateOrganisationStatusUseCase({
      id,
      status,
    });

    res.json(organisations);
  } catch (error) {
    next(error);
  }
};

export default updateOrganisationStatus;
