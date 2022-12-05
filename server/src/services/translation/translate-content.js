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
      try {
        return translate({ source: 'en', target: [lng], json: content, id });
      } catch (e) {
        console.warn(`Could not translate ${content} to ${lng}`, e);
        return '';
      }
    }),
  );

  return translations;
};

export default translateContent;
