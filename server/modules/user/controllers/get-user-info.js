// for now just return the user info comes from auth
const getUserInfo = async (req, res, next) => {
  const { user } = req;

  try {
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export default getUserInfo;
