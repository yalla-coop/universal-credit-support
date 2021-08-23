const createOrgSlug = (orgName) => {
  const slug = orgName.trim().toLowerCase().replace(' ', '-');
  return slug;
};

export default createOrgSlug;
