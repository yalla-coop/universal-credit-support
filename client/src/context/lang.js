import { createContext, useState, useContext } from 'react';

const LangContext = createContext({
  state: 'english',
  setLang: () => {},
});

const LangProvider = ({ children, ...props }) => {
  const [lang, setLang] = useState('english');

  const value = { lang, setLang };
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
