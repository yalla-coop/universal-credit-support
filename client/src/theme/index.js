import globalStyle from './global-style';
import colors from './colors';
import borders from './borders';
import shadows from './shadows';
import gradients from './gradients';

const constants = {
  columns: { mobile: 4, tablet: 12, desktop: 12 },
  gridGutter: { mobile: 8, tablet: 16, desktop: 24 },
  // side menu width
  // header height
  // ...
  layout: {
    step: {
      leftPadding: {
        mobile: '5vw',
        tablet: '9.72vw',
        desktop: '9.72vw',
      },
      rightPadding: {
        mobile: '5vw',
        tablet: '6.25vw',
        desktop: '6.25vw',
      },
      menu: {
        desktop: '260px',
      },
    },
  },
  translationBar: {
    desktop: {
      height: '52px',
      padding: '0 164px',
      paddingTop: '26px 0',
    },
    tablet: {
      height: '42px',
      padding: '0 38px',
      paddingTop: '20px 0',
    },
  },
};

export const spacings = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
  9: '80px',
  10: '96px',
  11: '120px',
  12: '144px',
  13: '160px',
};

export const screensWidth = {
  mobileXS: 374,
  mobile: 576,
  tablet: 949,
  desktop: 1442,
};

export const maxWidths = {
  desktop: '1560px',
};

export const media = {
  mobileXS: `@media (max-width: ${screensWidth.mobileXS}px)`,
  mobile: `@media (max-width: ${screensWidth.mobile}px)`,
  tablet: `@media (max-width: ${screensWidth.tablet}px)`,
  desktop: `@media (max-width: ${screensWidth.desktop}px)`,
};

export const breakpoints = {
  mobileXS: `${screensWidth.mobileXS}px`,
  mobile: `${screensWidth.mobile}px`,
  tablet: `${screensWidth.tablet}px`,
  desktop: `${screensWidth.desktop}px`,
};

const theme = {
  name: 'default', // for storybook
  colors,
  spacings,
  screensWidth,
  media,
  breakpoints,
  constants,
  borders,
  shadows,
  maxWidths,
  gradients,
};

export { globalStyle };
export default theme;
