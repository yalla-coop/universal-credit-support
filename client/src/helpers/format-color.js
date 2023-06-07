const formatColor = (hslObj) => {
  const { h, s, l } = hslObj;
  if ((!h && h !== 0) || (!s && s !== 0) || (!l && l !== 0)) {
    return hslObj;
  }

  const hslString = `hsl(${Math.round(h)}, ${Math.round(
    s * 100
  )}%, ${Math.round(l * 100)}%)`;

  return hslString;
};

export default formatColor;
