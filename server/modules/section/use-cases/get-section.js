import * as Section from '../model';

const getSection = async ({ id }) => {
  const section = await Section.findSectionById(id);

  return section;
};

export default getSection;
