import { ThemeProvider, Global } from '@emotion/react';

import { createContext, useState, useContext, useEffect } from 'react';
import { accessabilityStyle } from '../theme';

const AccessibilityContext = createContext({
  isFontLarge: false,
  setIsFontLarge: () => {},
  layoutColor: '',
  setLayoutColor: () => {},
});
const AccessibilityProvider = ({ children, ...props }) => {
  const [layoutColor, setLayoutColor] = useState('');
  const [layoutFontFamily, setLayoutFontFamily] = useState(
    localStorage.getItem('layoutFontFamily') || ''
  );
  const [isFontLarge, setIsFontLarge] = useState(() => {
    return localStorage.getItem('isFontLarge') || false;
  });

  useEffect(() => {
    const _layoutColor = localStorage.getItem('layoutColor');
    setLayoutColor(_layoutColor);
  }, []);

  const value = {
    isFontLarge,
    setIsFontLarge,
    layoutColor,
    setLayoutColor,
    layoutFontFamily,
    setLayoutFontFamily,
  };

  return layoutColor || layoutFontFamily ? (
    <>
      <Global styles={accessabilityStyle(layoutFontFamily)} />
      <ThemeProvider
        theme={(theme) => ({ ...theme, layoutColor, layoutFontFamily })}
      >
        <AccessibilityContext.Provider value={value} {...props}>
          {children}
        </AccessibilityContext.Provider>
      </ThemeProvider>
    </>
  ) : (
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
