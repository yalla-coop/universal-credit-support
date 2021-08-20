// MAKE SURE THIS FILE IS SYNCED WIth ./server/database/init/types.sql
// NOTE!!! IF YOU CHANGE ANY TYPES HERE MAKE SURE YOU UPDATE THE SRC CONSTANTS FILE AS WELL

export const userRoles = {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
};

export const userStatuses = {
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
};

export const contactLinksTypes = {
  PHONE: 'PHONE',
  WEBCHAT_LINK: 'WEBCHAT_LINK',
  LINK: 'LINK',
};
