import * as Sections from '../use-cases';

const updateSection = async (req, res, next) => {
  try {
    const { title, topics, approved } = req.body;
    const { id: userId, organisationId: userOrganisationId, role } = req.user;
    const { id } = req.params;

    const section = await Sections.updateSection({
      id,
      title,
      userId,
      topics,
      userOrganisationId,
      role,
      approved,
    });

    res.json(section);
  } catch (error) {
    next(error);
  }
};

export default updateSection;
