import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { types } from '../constants';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const { languages = 'en' } = i18n;

  const lng = languages
    .find((val) =>
      Object.keys(types.languageCodes).find(
        (key) => types.languageCodes[key] === val.slice(0, 2)
      )
    )
    .slice(0, 2);

  const lngUpperCase = lng.toUpperCase();

  const lngFull = Object.keys(types.languageCodes).find(
    (key) => types.languageCodes[key] === lng
  );

  const flag = lngFull?.charAt(0)?.toLowerCase() + lngFull?.slice(1);

  const dir = i18n.dir();

  const hasNamespace = (namespace) => {
    return i18n.hasResourceBundle(lng, namespace);
  };

  const setDirection = () => {
    document.documentElement.style.direction = dir;
  };

  i18n.on('languageChanged', function (lng) {
    setDirection();
  });

  useEffect(() => {
    setDirection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { lng, lngUpperCase, lngFull, flag, dir, hasNamespace };
};

export default useLanguage;
