// MAKE SURE THIS FILE IS SYNCED WIth ./server/database/init/types.sql And constants in backend
// NOTE!!! IF YOU CHANGE ANY TYPES HERE MAKE SURE YOU UPDATE THE BACKEND as well

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

export const stageTypes = {
  BEFORE_CLAIMING: 'BEFORE_CLAIMING',
  CLAIMING: 'CLAIMING',
  AFTER_CLAIMING: 'AFTER_CLAIMING',
};

export const linkTypes = {
  LINK: 'LINK',
  PHONE: 'PHONE',
  WEBCHAT_LINK: 'WEBCHAT_LINK',
  EMAIL: 'EMAIL',
};
export const whereDoYouNeedToGoTypes = {
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

export const stages = {
  beforeClaiming: 'BEFORE_CLAIMING',
  claiming: 'CLAIMING',
  afterClaiming: 'AFTER_CLAIMING',
};

export const languageCodes = {
  Afrikaans: 'af',
  Albanian: 'sq',
  Amharic: 'am',
  Arabic: 'ar',
  Armenian: 'hy',
  Azerbaijani: 'az',
  Bengali: 'bn',
  Bosnian: 'bs',
  Bulgarian: 'bg',
  Chinese: 'zh',
  Croatian: 'hr',
  Czech: 'cs',
  Danish: 'da',
  Dutch: 'nl',
  English: 'en',
  Estonian: 'et',
  Farsi: 'fa',
  Filipino: 'tl',
  Finnish: 'fi',
  French: 'fr',
  Georgian: 'ka',
  German: 'de',
  Greek: 'el',
  Gujarati: 'gu',
  Haitian: 'ht',
  Hebrew: 'he',
  Hindi: 'hi',
  Hungarian: 'hu',
  Icelandic: 'is',
  Indonesian: 'id',
  Irish: 'ga',
  Italian: 'it',
  Japanese: 'ja',
  Kazakh: 'kk',
  Korean: 'ko',
  Latvian: 'lv',
  Lithuanian: 'lt',
  Macedonian: 'mk',
  Malay: 'ms',
  Malayalam: 'ml',
  Maltese: 'mt',
  Marathi: 'mr',
  Mongolian: 'mn',
  Norwegian: 'no',
  Pashto: 'ps',
  Polish: 'pl',
  Portuguese: 'pt',
  Punjabi: 'pa',
  Romanian: 'ro',
  Russian: 'ru',
  Serbian: 'sr',
  Sinhala: 'si',
  Slovak: 'sk',
  Slovenian: 'sl',
  Somali: 'so',
  Spanish: 'es',
  Swahili: 'sw',
  Swedish: 'sv',
  Tamil: 'ta',
  Telugu: 'te',
  Thai: 'th',
  Turkish: 'tr',
  Ukrainian: 'uk',
  Urdu: 'ur',
  Uzbek: 'uz',
  Vietnamese: 'vi',
  Welsh: 'cy',
};
