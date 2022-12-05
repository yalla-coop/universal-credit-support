import * as Sections from '../use-cases';

const updateSectionsOrder = async (req, res, next) => {
  try {
    const { sections, uniqueSlug } = req.body;
    const { organisationId: userOrganisationId } = req.user;

    const orderedSections = await Sections.updateSectionsOrder({
      sections,
      userOrganisationId,
      uniqueSlug,
    });

    res.json(orderedSections);
  } catch (error) {
    next(error);
  }
};

export default updateSectionsOrder;
