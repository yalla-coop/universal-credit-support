import Boom from '@hapi/boom';

const authorize = (allowedRoles) => (req, res, next) => {
  try {
    const { user = {} } = req;
    const { role } = user;

    if (!role || !allowedRoles.includes(role)) {
      throw Boom.forbidden();
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default authorize;
