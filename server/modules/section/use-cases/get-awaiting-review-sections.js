import * as Sections from '../model';

const getAwaitingReviewSection = async () => {
  const sections = await Sections.findAwaitingReviewSections();
  console.log('sections', sections);
  return sections;
};

export default getAwaitingReviewSection;
