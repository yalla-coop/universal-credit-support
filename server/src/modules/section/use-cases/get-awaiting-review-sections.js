import * as Sections from '../model';

const getAwaitingReviewSection = async () => {
  const sections = await Sections.findAwaitingReviewSections();
  return sections;
};

export default getAwaitingReviewSection;
