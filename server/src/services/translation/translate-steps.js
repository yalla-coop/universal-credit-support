import { translate } from './translation-api';

const translateSteps = async ({ lng, steps }) => {
  const translations = await Promise.all(
    steps.map(async (step) => {
      const {
        title,
        description,
        pageTitle,
        pageDescription,
        howLongDoesItTake,
        whereDoYouNeedToGo,
        thingsYouWillNeed,
        whatYouWillNeedToKnow,
        languageCode,
        topTip,
        otherTips,
        id,
        allFieldsTranslated,
      } = step;

      if ((languageCode === lng && allFieldsTranslated) || lng === 'en') {
        return {
          ...step,
          languageCode: lng,
          isTranslated: true,
        };
      }

      const res = await translate({
        source: 'en',
        target: [lng],
        json: {
          title,
          description,
          pageTitle,
          pageDescription,
          howLongDoesItTake,
          whereDoYouNeedToGo,
          thingsYouWillNeed,
          whatYouWillNeedToKnow,
          topTip,
          otherTips,
        },
        id,
      });

      return {
        ...step,
        title: res.content.title,
        description: res.content.description,
        pageTitle: res.content.pageTitle,
        pageDescription: res.content.pageDescription,
        howLongDoesItTake: res.content.howLongDoesItTake,
        whereDoYouNeedToGo: whereDoYouNeedToGo
          ? {
              ...res.content.whereDoYouNeedToGo,
              type: whereDoYouNeedToGo && whereDoYouNeedToGo.type,
            }
          : null,
        thingsYouWillNeed: Object.values(res.content.thingsYouWillNeed),
        whatYouWillNeedToKnow: Object.values(res.content.whatYouWillNeedToKnow),
        topTip: res.content.topTip,
        languageCode: lng,
        otherTips: Object.values(res.content.otherTips),
      };
    }),
  );

  return translations;
};

export default translateSteps;
