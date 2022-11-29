import { translate } from './translation-api';

const translateContent = async ({ lng, contentArray }) => {
  const translations = await Promise.all(
    contentArray.map(({ content, languageCode, id }) => {
      if (languageCode === lng || lng === 'en') {
        return {
          id,
          content: { ...content },
          languageCode: lng,
          isTranslated: true,
        };
      }
      return translate({ source: 'en', target: [lng], json: content, id });
    }),
  );

  return translations;
};

export default translateContent;
