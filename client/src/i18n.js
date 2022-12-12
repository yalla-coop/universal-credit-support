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
      'af',
      'sq',
      'am',
      'ar',
      'hy',
      'az',
      'bn',
      'bs',
      'bg',
      'zh',
      'hr',
      'cs',
      'da',
      'nl',
      'en',
      'et',
      'fa',
      'tl',
      'fi',
      'fr',
      'ka',
      'de',
      'el',
      'gu',
      'ht',
      'he',
      'hi',
      'hu',
      'is',
      'id',
      'ga',
      'it',
      'ja',
      'kk',
      'ko',
      'lv',
      'lt',
      'mk',
      'ms',
      'ml',
      'mt',
      'mr',
      'mn',
      'no',
      'ps',
      'pl',
      'pt',
      'pa',
      'ro',
      'ru',
      'sr',
      'si',
      'sk',
      'sl',
      'so',
      'es',
      'sw',
      'sv',
      'ta',
      'te',
      'th',
      'tr',
      'uk',
      'ur',
      'uz',
      'vi',
      'cy',
    ],
    load: 'languageOnly',
    react: {
      useSuspense: true,
    },
  });

export default i18n;
