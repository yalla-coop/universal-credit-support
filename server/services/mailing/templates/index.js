import * as templatesId from './templates-constants';

const templates = {
  // paramsObj: name, link
  [templatesId.RESET_PASSWORD]: {
    english: 'd-0b2d3d4307a24cc1a6fcae028656b5f4',
    // other langs to go here
  },

  // paramsObj:  link
  [templatesId.ORG_EMAIL_UPDATED]: {
    english: 'd-7443bb53124d418898586e9026a90d5f',
  },

  // paramsObj: link
  [templatesId.ADMIN_ORG_ADDED_A_NEW_SECTION]: {
    english: 'd-6588c8eb51ef42299158e6877ea961f3',
  },

  // paramsObj: link ,name
  [templatesId.SIGN_UP]: {
    english: 'd-941442404c374bbd99238344f5407f4c',
  },

  // paramsObj: link
  [templatesId.ORG_APPROVED]: {
    english: 'd-1e195950b55e408093f30f2829f5ad48',
  },

  // paramsObj: rejection_reasons
  [templatesId.ORG_REJECTED]: {
    english: 'd-75319eb88b9f496185fd895b621bb97d',
  },

  // paramsObj: section_title , content_link
  [templatesId.SECTION_APPROVED]: {
    english: 'd-ec7b8298fc8740108ebdca9cece31f50',
  },

  // paramsObj: section_title , content_link ,feedback
  [templatesId.SECTION_REJECTED]: {
    english: 'd-5703cff3449a469491fc6de68e28c524',
  },
};

const getTemplate = (template, language) => {
  return templates[template][language] || templates[template]['english'];
};

export { templates };

export default getTemplate;
