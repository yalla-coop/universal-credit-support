import * as Section from '../model';

const getTopicsBySectionId = async ({ id, lng }) => {
  const topics = await Section.findTopicsBySectionId(id, lng);

  return topics;
};

export default getTopicsBySectionId;
