import * as templatesId from './templates-constants';

const templates = {
  [templatesId.RESET_PASSWORD]: {
    english: 'd-23e6145fc4334120bb32f9e48e7ef607',
    // other langs to go here
  },
  // paramsObj: link
  [templatesId.ORG_EMAIL_UPDATED]: {
    english: 'd-b2be33567f4b495db0e29285ff701219',
    // other langs to go here
  },
  // paramsObj: rejection_reasons
  [templatesId.ORG_REJECTED]: {
    english: 'd-f51f8703d53445a781128aa33042cecc',
  },

  // paramsObj: link
  [templatesId.ORG_APPROVED]: {
    english: 'd-d9085a2f5dc44737992a2b29d94ca1e0',
  },
  // paramsObj: link ,name
  [templatesId.SIGN_UP]: {
    english: 'd-53af3f7e22ee4a508452263d1fea2982',
  },
};

const getTemplate = (template, language) => {
  return templates[template][language] || templates[template]['english'];
};

export { templates };

export default getTemplate;
