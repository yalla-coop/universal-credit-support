import * as templatesId from './templates-constants';

const templates = {
  [templatesId.RESET_PASSWORD]: {
    english: 'd-23e6145fc4334120bb32f9e48e7ef607',
    // other langs to go here
  },
};

const getTemplate = (template, language) => {
  return templates[template][language] || templates[template]['english'];
};

export { templates };

export default getTemplate;
