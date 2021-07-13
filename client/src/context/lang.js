import { createContext, useState, useContext } from 'react';

const langOptions = [
  { value: 'english', label: 'English' },
  { value: 'french', label: 'French' },
];

const initialLang = 'english';

const storeLangIntoStorage = (lang) => {
  localStorage.setItem('lang', JSON.stringify(lang));
};

const getLangFromStorage = () => {
  const lang = JSON.parse(localStorage.getItem('lang'));
  if (lang) {
    return lang;
  } else {
    storeLangIntoStorage(initialLang);
    return initialLang;
  }
};

const LangContext = createContext({
  lang: 'english',
  langOptions: [],
  setLang: () => {},
});

const LangProvider = ({ children, ...props }) => {
  const [lang, _setLang] = useState(getLangFromStorage);

  const setLang = (newLang) => {
    _setLang(newLang);
    storeLangIntoStorage(newLang);
  };

  const value = { lang, langOptions, setLang };
  return (
    <LangContext.Provider value={value} {...props}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const value = useContext(LangContext);
  return value;
};

export default LangProvider;
