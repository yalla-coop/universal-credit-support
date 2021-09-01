const createOrgSlug = (orgName) => {
  const slug = orgName.trim().toLowerCase().replace(/ /g, '-');
  return slug;
};

export default createOrgSlug;
