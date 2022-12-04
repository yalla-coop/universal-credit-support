import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common'],
    resources: {},
    defaultNS: 'common',
    fallbackLng: 'en',
    debug: false,
    preload: true,
    // nsSeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: [
      'en',
      'fr',
      'de',
      'es',
      'ur',
      'it',
      'pl',
      'hi',
      'ru',
      'ar',
      'pt',
      'cy',
    ],
    load: 'languageOnly',
    react: {
      useSuspense: true,
    },
  });

export default i18n;
