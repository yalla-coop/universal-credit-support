import config from '../config';

const { appUrl } = config.common;

const appLinks = {
  // GENERAL
  LOGIN: `${appUrl}/admin/login`,
  SET_PASSWORD: `${appUrl}/admin/reset-password/:token`,
};

export { appLinks };
