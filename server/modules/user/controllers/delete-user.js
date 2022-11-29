import Boom from '@hapi/boom';
import { userRoles } from '../../../constants';
import * as User from '../use-cases';

const deleteUser = async (req, res, next) => {
  try {
    const { id: adminId, role } = req.user;

    const { id } = req.body;

    if (
      userRoles.SUPER_ADMIN === role ||
      (userRoles.ADMIN === role && adminId === id)
    ) {
      await User.deleteUser({ id });
    } else {
      throw Boom.forbidden();
    }
    res.send();
  } catch (error) {
    next(error);
  }
};

export default deleteUser;
