import translations from '../constants/translations';

const getTranslation = ({ string, lang, t }) => {
  // valid string `checkEligibility.checkListItems.incomeDetails`
  const keys = string.split('.');
  if (!keys.length || !t[lang]) {
    return '';
  }

  // to allow the `translate` function to handle missing translation
  try {
    if (keys.length === 1) {
      return t[lang][keys[0]];
    }

    return getTranslation({
      string: keys.slice(1).join('.'),
      lang,
      t: { [lang]: t[lang][keys[0]] },
    });
  } catch (error) {
    return '';
  }
};

const translate = (string, lang, customData, customDivider) => {
  // IF NO LANG PROVIDED DEFAULT TO ENGLISH
  if (!lang) return string;
  if (typeof string !== 'string') {
    // eslint-disable-next-line no-console
    console.warn('Value to be translated not a string');
    return string;
  }

  const translatedWords = getTranslation({ string, lang, t: translations });

  if (!translatedWords && lang === 'english') {
    // eslint-disable-next-line no-console
    console.warn('No translation exists');
    return string;
  }

  if (!translatedWords) {
    const defaultEng = getTranslation({
      string,
      lang: 'english',
      t: translations,
    });

    if (!defaultEng) {
      // eslint-disable-next-line no-console
      console.warn('No translation exists');
      return string;
    }
    // eslint-disable-next-line no-console
    console.warn('Cannont find a translation for the selected language');
    return defaultEng;
  }

  let finalTranslation = translatedWords;

  if (customData) {
    customData.forEach((item, i) => {
      const re = new RegExp(`{CUSTOM${i + 1}}`, 'gi');
      finalTranslation = customDivider
        ? finalTranslation.replace(re, `|${item}`)
        : finalTranslation.replace(re, item);
    });
  }

  return finalTranslation;
};

export default translate;
