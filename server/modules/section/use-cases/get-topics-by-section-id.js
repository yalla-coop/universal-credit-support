import * as Section from '../model';

const getTopicsBySectionId = async ({ id }) => {
  const topics = await Section.findTopicsBySectionId(id);

  return topics;
};

export default getTopicsBySectionId;
