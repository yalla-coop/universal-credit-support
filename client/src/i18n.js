import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
