import * as User from '../use-cases';

const updateUser = async (req, res, next) => {
  try {
    const { id, role } = req.body;
    const updated = await User.updateUserRole({
      id,
      role,
    });

    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export default updateUser;
