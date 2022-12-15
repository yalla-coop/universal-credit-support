import * as User from '../use-cases';

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { withOrgDetails } = req.query;

    const user = await User.getUserById({
      id,
      withOrgDetails,
    });

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export default getUserById;
