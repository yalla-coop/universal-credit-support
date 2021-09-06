import setColor from '../helpers/set-color-variations';

const primaryMain = { h: 10, s: 0.97, l: 0.63 };
const secondaryMain = { h: 215, s: 0.35, l: 0.35 };

export default {
  primaryMain,
  primaryMid: setColor('primary', primaryMain).mid,
  primaryLight: '#FFF5F3',
  secondaryMain,
  secondaryMid: '#4F6687',
  secondaryLight: '#F7FBFF',
  neutralMain: '#1A202B',
  neutralPrimaryMVP: '#1A202C',
  neutralDark: '#5A666A',
  neutralMid: '#D9D6CC',
  neutralLight: '#F4F1E5',
  neutralSurface: '#FBF9F5',
  white: '#ffffff',
  modalBackground: '#255599b3',
  error: primaryMain,
  borderPrimary: primaryMain,
  borderSecondary: '#5A666A',
  gray9: '#3C404B',
};

//  primaryMid: hsl(9, 90%, 92%)
// primaryLight: hsl(10, 100%, 98%)

// secondaryMain: hsl(215, 35%, 35%)
// secondarymid: hsl(215, 26%, 42%)
// secondaryLght: hsl(210, 100%, 98%)
