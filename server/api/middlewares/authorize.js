import Boom from '@hapi/boom';

const authorize = (allowedRoles) => (req, res, next) => {
  try {
    const { user = {} } = req;
    const { roles } = user;

    // TODO: get active role when multiple roles when its implemented
    const role = roles[0];
    if (!role || !allowedRoles.includes(role)) {
      throw Boom.forbidden();
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default authorize;
