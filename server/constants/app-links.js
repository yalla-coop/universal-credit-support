import config from '../config';

const { appUrl } = config.common;

const appLinks = {
  // GENERAL
  LOGIN: `${appUrl}/login`,
  RESET_PASSWORD: `${appUrl}/reset-password/:token`,
};

export { appLinks };
