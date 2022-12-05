const getCSRFToken = async (req, res) => {
  const { csrf } = req;
  res.json({ csrfToken: csrf });
};

export default getCSRFToken;
