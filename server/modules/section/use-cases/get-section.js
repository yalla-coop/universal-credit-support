import * as Section from '../model';

const getSection = async ({ id }) => {
  const section = await Section.getSectionById(id);

  return section;
};

export default getSection;
