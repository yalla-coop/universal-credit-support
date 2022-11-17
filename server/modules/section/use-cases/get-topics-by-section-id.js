import * as Section from '../model';

const getTopicsBySectionId = async ({ id, lang }) => {
  const topics = await Section.findTopicsBySectionId(id, lang);

  return topics;
};

export default getTopicsBySectionId;
