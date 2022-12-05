import { updateOrganisation as updateOrganisationUseCase } from '../use-cases';

const updateOrganisation = async (req, res, next) => {
  try {
    const {
      id: loggedInUserId,
      organisationId: userOrganisationId,
      role: loggedInUserRole,
    } = req.user;
    const { id } = req.params;
    const { withUserDetails } = req.query;
    const {
      organisationName,
      typeOfOrganisation,
      uniqueSlug,
      colors,
      logoFile,
      firstName,
      lastName,
      email,
      backupEmail,
      userId,
    } = req.body;

    const results = await updateOrganisationUseCase({
      id,
      userId,
      loggedInUserId,
      organisationName,
      typeOfOrganisation,
      uniqueSlug,
      colors,
      logoFile,
      userOrganisationId,
      firstName,
      lastName,
      email,
      backupEmail,
      withUserDetails: JSON.parse(withUserDetails || null),
      loggedInUserRole,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default updateOrganisation;
