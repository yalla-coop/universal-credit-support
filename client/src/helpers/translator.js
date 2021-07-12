import translations from '../constants/translations';

const getTranslation = ({ string, lang, t }) => {
  // valid string `checkEligibility.checkListItems.incomeDetails`
  const keys = string.split('.');
  if (!keys.length) {
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
    console.warn('Value to be translated not a string');
    return string;
  }

  const translatedWords = getTranslation({ string, lang, t: translations });

  if (!translatedWords && lang === 'english') {
    console.warn('No translation exists');
    return string;
  }

  if (!translatedWords) {
    const defaultEng = translations['english'][string];
    if (!defaultEng) {
      console.warn('No translation exists');
      return string;
    }
    console.warn('Cannont find a translation for the selected language');
    return translatedWords;
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
