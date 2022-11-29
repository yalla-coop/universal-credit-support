import setColor from '../helpers/set-color-variations';
import formatColor from '../helpers/format-color';

export const defaultColors = {
  primaryBgMain: { h: 215, s: 0.35, l: 0.35 },
  secondaryBgMain: { h: 22, s: 0.97, l: 0.66 },
  tertiaryBgMain: { h: 46, s: 0.15, l: 0.83 },
  quartenaryBgMain: { h: 48, s: 0.41, l: 0.93 },
  quinaryBgMain: { h: 219, s: 0.25, l: 0.14 },

  primaryTextMain: { h: 0, s: 1, l: 1 },
  secondaryTextMain: { h: 219, s: 0.25, l: 0.14 },
  tertiaryTextMain: { h: 219, s: 0.25, l: 0.14 },
  quartenaryTextMain: { h: 219, s: 0.25, l: 0.14 },
  quinaryTextMain: { h: 0, s: 1, l: 1 },
};

export default {
  primaryDark: formatColor(
    setColor('primary', defaultColors.secondaryBgMain).dark
  ),
  primaryMain: formatColor(defaultColors.secondaryBgMain),
  primaryMid: formatColor(
    setColor('primary', defaultColors.secondaryBgMain).mid
  ),
  primaryLight: formatColor(
    setColor('primary', defaultColors.secondaryBgMain).light
  ),
  secondaryMain: formatColor(defaultColors.primaryBgMain),
  secondaryMid: formatColor(
    setColor('secondary', defaultColors.primaryBgMain).mid
  ),
  secondaryLight: formatColor(
    setColor('secondary', defaultColors.primaryBgMain).light
  ),
  tertiaryBgMain: formatColor(defaultColors.tertiaryBgMain),
  quartenaryBgMain: formatColor(defaultColors.quartenaryBgMain),
  quinaryBgMain: formatColor(defaultColors.quinaryBgMain),

  primaryTextMain: formatColor(defaultColors.primaryTextMain),
  secondaryTextMain: formatColor(defaultColors.secondaryTextMain),
  tertiaryTextMain: formatColor(defaultColors.tertiaryTextMain),
  quartenaryTextMain: formatColor(defaultColors.quartenaryTextMain),
  quinaryTextMain: formatColor(defaultColors.quinaryTextMain),
  neutralMain: formatColor(defaultColors.quinaryBgMain),
  neutralMid: formatColor(defaultColors.tertiaryBgMain),

  neutralDark: formatColor(
    setColor('quinary', defaultColors.quinaryBgMain).dark
  ),

  neutralLight: formatColor(defaultColors.quartenaryBgMain),
  neutralSurface: formatColor(
    setColor('quinary', defaultColors.quinaryBgMain).Surface
  ),
  tertiaryDark: formatColor(
    setColor('tertiary', defaultColors.tertiaryBgMain).dark
  ),
  white: 'hsl(0, 0%, 100%)',
  modalBackground: 'hsl(215, 61%, 37%)',
  error: formatColor(defaultColors.secondaryBgMain),
  borderPrimary: formatColor(defaultColors.secondaryBgMain),
  borderSecondary: 'hsl(195, 8%, 38%)',
  primaryMainObj: defaultColors.secondaryBgMain,
  secondaryMainObj: defaultColors.secondaryBgMain,
  facebookBlue: 'hsla(214, 89%, 52%, 1)',
  whatsappGreen: 'hsla(142, 70%, 49%, 1)',
  irlenBlue: '#96ADFC',
  irlenGreen: '#A8F29A',
  irlenYellow: '#EDDD6E',
  irlenRed: '#E0A6AA',
  blueLink: '#1890ff',
};

// HERE FOR REFERENCE ONLY
//  primaryMid: hsl(9, 90%, 92%)
// primaryLight: hsl(10, 100%, 98%)

// secondaryMain: hsl(215, 35%, 35%)
// secondarymid: hsl(215, 26%, 42%)
// secondaryLght: hsl(210, 100%, 98%)

// tertiaryMain: 'hsl(22, 97%, 66%)',
// quinaryMain: 'hsl(22, 97%, 66%)',
// quartenaryMain: 'hsl(22, 97%, 66%)',
// neutralMain: 'hsl(219, 25%, 14%)',
// neutralDark: 'hsl(195, 8%, 38%)',
// neutralMid: 'hsl(46, 15%, 83%)',
// neutralLight: 'hsl(48, 41%, 93%)',
// neutralSurface: 'hsl(40, 43%, 97%)',
// tertiaryDark: '#FC6244',
