import { createContext, useState, useContext } from 'react';

const AccessibilityContext = createContext({
  isFontLarge: false,
  setIsFontLarge: () => {},
});

const AccessibilityProvider = ({ children, ...props }) => {
  const [isFontLarge, setIsFontLarge] = useState(() => {
    return localStorage.getItem('isFontLarge') || false;
  });

  const value = { isFontLarge, setIsFontLarge };
  return (
    <AccessibilityContext.Provider value={value} {...props}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const value = useContext(AccessibilityContext);
  return value;
};

export default AccessibilityProvider;
