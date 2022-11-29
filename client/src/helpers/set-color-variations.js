const updatePerc = (original, multiplier) => {
  const updated = original * multiplier;
  return updated > 1 ? 1 : updated;
};

const updateHue = (original, multiplier) => {
  const updated = original * multiplier;
  return updated > 255 ? 255 : updated;
};

const setColor = (type, color) => {
  const { h, s, l } = color;
  if (type === 'primary') {
    return {
      mid: {
        h: updateHue(h, 0.9),
        s: updatePerc(s, 0.928),
        l: updatePerc(l, 1.46),
      },

      light: { h, s: 1, l: 0.98 },
      dark: {
        h: updateHue(h, 0.4545),
        s,
        l: updatePerc(l, 0.954),
      },
    };
  }
  if (type === 'secondary') {
    return {
      mid: { h, s: updatePerc(s, 0.743), l: updatePerc(l, 1.2) },
      light: { h: updateHue(h, 0.977), s: 1, l: 0.98 },
    };
  }
  if (type === 'tertiary') {
    return {
      dark: {
        h: updateHue(h, 0.217),
        s: updatePerc(s, 6.467),
        l: updatePerc(l, 0.759),
      },
    };
  }

  if (type === 'quinary') {
    return {
      Surface: {
        h: updateHue(h, 0.182),
        s: updatePerc(s, 1.72),
        l: updatePerc(l, 6.928),
      },
      dark: {
        h: updateHue(h, 0.89),
        s: updatePerc(s, 0.32),
        l: updatePerc(l, 2.714),
      },
    };
  }

  // eslint-disable-next-line no-console
  console.error('no type provided');
};

export default setColor;
