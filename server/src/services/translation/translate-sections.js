import { translate } from './translation-api';

const translateSections = async ({ lng, sections }) => {
  const translations = await Promise.all(
    sections.map(async (section) => {
      const { title, languageCode, id } = section;
      if (languageCode === lng || lng === 'en') {
        return {
          ...section,
          languageCode: lng,
          isTranslated: true,
        };
      }
      const res = await translate({
        source: 'en',
        target: [lng],
        json: { title },
        id,
      });

      return { ...section, title: res.content.title, languageCode: lng };
    }),
  );

  return translations;
};

export default translateSections;
