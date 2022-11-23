// MAKE SURE THIS FILE IS SYNCED WIth ./server/database/init/types.sql && client/src/constants/data-type.js
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
  EMAIL: 'EMAIL',
};

export const linkTypes = {
  LINK: 'LINK',
  PHONE: 'PHONE',
};

export const organisationTypes = {
  INFORMAL_OR_CONSTITUTED_COMMUNITY_GROUP_LITTLE_OR_NO_ANNUAL_INCOME:
    'Informal or constituted community group [little or no annual income]',
  MICRO_CHARITY_VOLUNTARY_ORGANISATION__LESS_THAN_10000_ANNUAL_INCOME:
    'Micro Charity / Voluntary Organisation [Less than £10,000 annual income]',
  SMALL_CHARITY_VOLUNTARY_ORGANISATION_10000_TO_100000_ANNUAL_INCOME:
    'Small Charity / Voluntary Organisation [£10,000 to £100,000 annual income]',
  MEDIUM_SIZE_CHARITY_VOLUNTARY_ORGANISATION_100000_TO_1M_ANNUAL_INCOME:
    'Medium Size Charity / Voluntary Organisation [£100,000 to £1m annual income]',
  LARGE_CHARITY_VOLUNTARY_ORGANISATION_1M_TO_10M_ANNUAL_INCOME:
    'Large Charity / Voluntary Organisation [£1m to 10m annual income]',
  MAJOR_CHARITY_VOLUNTARY_ORGANISATION_10M_ANNUAL_INCOME:
    'Major Charity / Voluntary Organisation [£10m+ annual income]',
  LOCAL_GOVERNMENT: 'Local Government',
  NATIONAL_GOVERNMENT: 'National Government',
  NHS_CCG: 'NHS / CCG',
  COMMUNITY_INTEREST_COMPANY: 'Community Interest Company',
  SOCIAL_ENTERPRISE: 'Social Enterprise',
  SCHOOL: 'School',
  FAITH_ORGANISATION: 'Faith Organisation',
  HOUSING_ASSOCIATION: 'Housing Association',
};
