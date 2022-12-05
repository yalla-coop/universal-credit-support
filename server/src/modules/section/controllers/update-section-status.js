import { updateSectionStatus as updateSectionStatusUseCase } from '../use-cases';

const updateSectionStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, explanation, organisationId } = req.body;

    const organisations = await updateSectionStatusUseCase({
      id,
      status,
      explanation,
      organisationId,
    });

    res.json(organisations);
  } catch (error) {
    next(error);
  }
};

export default updateSectionStatus;
