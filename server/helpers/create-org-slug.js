const createOrgSlug = (orgName) => {
  const slug = orgName.trim().toLowerCase().replaceAll(' ', '-');
  return slug;
};

export default createOrgSlug;
