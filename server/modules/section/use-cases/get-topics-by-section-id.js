import * as Section from '../model';
import * as Translation from '../../translations/model';
import translateContent from '../../../services/translation/translate-content';

const getTopicsBySectionId = async ({ id, lng, forPublic }) => {
  if (!forPublic) {
    const topics = await Section.findTopicsBySectionId(id);
    return topics;
  }

  const topics = await Section.findTopicsWithTranslationBySectionId(id, lng);

  const topicsT = await translateContent({
    lng,
    contentArray: topics,
  });

  Promise.all(
    topicsT.map((c) => {
      if (!c.isTranslated) {
        return Translation.createTopicI18n({
          topicId: c.id,
          languageCode: c.languageCode,
          content: c.content,
        });
      }
      return Promise.resolve();
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
              topics[topicTIndex].englishContent.resources[resourceIndex];
            if (prevResource.key) {
              return {
                type: prevResource.type,
                key: prevResource.key,
                url: prevResource.url,
              };
            }
            return {
              label: resource.label,
              url: prevResource.url,
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
