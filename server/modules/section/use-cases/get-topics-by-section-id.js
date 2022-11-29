import * as Section from '../model';
import * as Translation from '../../translations/model';
import translateContent from '../../../services/translation/translate-content';

const getTopicsBySectionId = async ({ id, lng }) => {
  const topics = await Section.findTopicsBySectionId(id, lng);

  const topicsT = await translateContent({
    lng,
    contentArray: topics,
  });

  await Promise.all(
    topicsT.map(async (c) => {
      if (!c.isTranslated) {
        await Translation.createTopicI18n({
          topicId: c.id,
          languageCode: c.languageCode,
          content: c.content,
        });
      }
    }),
  );

  const topicsTranslated = topicsT.map((topicT, topicTIndex) => {
    return {
      id: topicT.id,
      languageCode: topicT.languageCode,
      isTranslated: topicT.isTranslated,
      content: {
        ...topicT.content,
        resources: Object.values(topicT.content.resources).map(
          (resource, resourceIndex) => {
            const prevResource =
              topics[topicTIndex].content.resources[resourceIndex];
            if (prevResource.key) {
              return {
                type: prevResource.type,
                key: prevResource.key && prevResource.key,
              };
            }
            return {
              label: resource.label,
              url: resource.url,
              type: prevResource.type,
            };
          },
        ),
      },
    };
  });

  return topicsTranslated;
};

export default getTopicsBySectionId;
