const checkLink = (link) => {
  if (link.startsWith('http')) {
    return link;
  }
  return `http://${link}`;
};

export default checkLink;
