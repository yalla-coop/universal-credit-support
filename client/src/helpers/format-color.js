const formatColor = (hslObj) => {
  const { h, s, l } = hslObj;
  if (!h || !s || !l) {
    console.error('No HSL obj provided');
    return hslObj;
  }

  const hslString = `hsl(${Math.round(h)}, ${Math.round(
    s * 100
  )}%, ${Math.round(l * 100)}%)`;

  console.log('HSL', hslString);
  return hslString;
};

export default formatColor;
