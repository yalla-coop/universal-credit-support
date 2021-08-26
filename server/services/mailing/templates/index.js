import * as templatesId from './templates-constants';

const templates = {
  [templatesId.RESET_PASSWORD]: {
    english: 'd-14a4ce377cb740949626c42c09a004f1',
    // other langs to go here
  },
};

const getTemplate = (template, language) => {
  return templates[template][language] || templates[template]['english'];
};

export { templates };

export default getTemplate;
