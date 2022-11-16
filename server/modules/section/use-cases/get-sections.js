import * as Sections from '../model';

const getSections = async ({ uniqueSlug = 'hyde', forPublic }) => {
  if (forPublic) {
    const sections = await Sections.getSectionsByOrgSlugForPublic(uniqueSlug);
    return sections;
  }
};

export default getSections;
