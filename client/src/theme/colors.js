import setColor from '../helpers/set-color-variations';
import formatColor from '../helpers/format-color';

const primaryMain = { h: 10, s: 0.97, l: 0.63 };
const secondaryMain = { h: 215, s: 0.35, l: 0.35 };

export default {
  primaryMain: formatColor(primaryMain),
  primaryMid: formatColor(setColor('primary', primaryMain).mid),
  primaryLight: formatColor(setColor('primary', primaryMain).light),
  secondaryMain: formatColor(secondaryMain),
  secondaryMid: formatColor(setColor('secondary', secondaryMain).mid),
  secondaryLight: formatColor(setColor('secondary', secondaryMain).light),
  tertiaryMain: 'hsl(22, 97%, 66%)',
  neutralMain: 'hsl(219, 25%, 14%)',
  neutralPrimaryMVP: 'hsl(220, 26%, 14%)',
  neutralDark: 'hsl(195, 8%, 38%)',
  neutralMid: 'hsl(46, 15%, 83%)',
  neutralLight: 'hsl(48, 41%, 93%)',
  neutralSurface: 'hsl(40, 43%, 97%)',
  tertiaryMain: '#FC9256',
  tertiaryDark: '#FC6244',
  white: 'hsl(0, 0%, 100%)',
  modalBackground: 'hsl(215, 61%, 37%)',
  error: formatColor(primaryMain),
  borderPrimary: formatColor(primaryMain),
  borderSecondary: 'hsl(195, 8%, 38%)',
  primaryMainObj: primaryMain,
  secondaryMainObj: secondaryMain,
  facebookBlue: 'hsla(214, 89%, 52%, 1)',
  whatsappGreen: 'hsla(142, 70%, 49%, 1)',
  irlenBlue: '#96ADFC',
  irlenGreen: '#A8F29A',
  irlenYellow: '#EDDD6E',
  irlenRed: '#E0A6AA',
};

// HERE FOR REFERENCE ONLY
//  primaryMid: hsl(9, 90%, 92%)
// primaryLight: hsl(10, 100%, 98%)

// secondaryMain: hsl(215, 35%, 35%)
// secondarymid: hsl(215, 26%, 42%)
// secondaryLght: hsl(210, 100%, 98%)
