import * as Sections from '../model';

const getSections = async () => {
  const sections = await Sections.getSections();
  const sectionsWithChecklist = sections.map((section, index) => ({
    ...section,
    id: index + 1,
    checklist: [
      section.thingsYouWillNeed.map((item) => ({
        ...item,
        stage: 'thingsYouWillNeed',
      })),
      section.whatYouWillNeedToKnow.map((item) => ({
        ...item,
        stage: 'whatYouWillNeedToKnow',
      })),
    ].flat(),
  }));

  return sectionsWithChecklist;
};

export default getSections;
