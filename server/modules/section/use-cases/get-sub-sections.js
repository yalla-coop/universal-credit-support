import * as Sections from '../model';

const getSubSections = async ({ id, forPublic }) => {
  if (forPublic) {
    const sections = await Sections.getSubSectionsBySectionIdForPublic(id);
    return sections;
  }
};

export default getSubSections;
