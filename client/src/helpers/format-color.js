const formatColor = (hslObj) => {
  const { h, s, l } = hslObj;
  if (!h || !s || !l) {
    console.error('No HSL obj provided');
    return hslObj;
  }

  return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(
    l * 100
  )}%)`;
};

export default formatColor;
