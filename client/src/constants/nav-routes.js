const GENERAL = {
  HOME: '/',
  HOME_ORG: '/:org/home',
  ORG: '/:org',
  UNAUTHORIZED: '/unauthorized',
  FORGET_PASSWORD: '/forget-password',
  RESET_PASSWORD: '/reset-password/:token',
};

const admin = '/admin';

const ADMIN = {
  EDIT_DETAILS: `${admin}/edit-details`,
  CUSTOMISE: `${admin}/customise`,
  LOG_OUT: `${admin}/log-out`,
  CREATE_UNIQUE_LINK: `${admin}/create-unique-link`,
  CREATE_UNIQUE_LINK_SUCCESS: `${admin}/create-unique-link/success`,
  SIGNUP: `${admin}/signup`,
  LOGIN: `${admin}/login`,
  PREVIEW_STEP: `${admin}/preview-step`,
  DELETE_STEP: `${admin}/delete-step`,
  WELCOME: `${admin}/welcome`, // only to use for the sub router
  DASHBOARD: `${admin}/dashboard`,
  MANAGE_STEPS: `${admin}/edit-steps`,
  CREATE_ORG_DETAILS_FIRST_STEP: `${admin}/set-organisation/1`,
  CREATE_ORG_DETAILS_SECOND_STEP: `${admin}/set-organisation/2`,
};

const SUPER_ADMIN = {
  EDIT_STEP: `${admin}/edit-step/:id`,
  HOME: `${admin}/home`,
  EDIT_CONTENT: `${admin}/edit-content`,
  EDIT_LANDING_PAGE: `${admin}/edit-landing-page`,
  EDIT_DETAILS: `${admin}/edit-details`,
  ORGANISATIONS: `${admin}/organisations`,
  CUSTOMISE: `${admin}/customise`,
  LOG_OUT: `${admin}/log-out`,
  MANAGE_STEPS: `${admin}/manage-steps`,
};

const EXTERNAL = {
  TERMS_OF_USE: '//www.google.com/',
  PRIVACY_POLICY: '//www.google.com/',

  CALL_US: '//www.google.com/',
  ELIGIBILITY_CALCULATOR:
    'https://www.entitledto.co.uk/benefits-calculator/Intro/Home?cid=0af743fb-414d-4559-a0c9-b88d26a88671',
  CREATE_UNIVERSAL_CREDIT_ACCOUNT:
    'https://www.universal-credit.service.gov.uk',
  // GOV_UK_VERIFY: '//www.google.com/GOV_UK_VERIFY',
  ONLINE_APPLICATION_FORM: 'https://www.universal-credit.service.gov.uk',
  MAKE_YOUR_CLAIM: 'https://www.universal-credit.service.gov.uk/sign-in',
  GETTING_YOUR_FIRST_PAYMENT: 'https://www.universal-credit.service.gov.uk',
  Call_0800_328_5644: 'tel:0800 328 5644',
  DEMO_VIDEO:
    'https://github.com/yalla-coop/universal-credit-support/issues/76',
  ACCESSABILITY_GUIDELINES: 'https://webaim.org/resources/contrastchecker/',
};

const STEPS = {
  STEP: '/steps/:id',
  STEP_ORG: '/:org/steps/:id',
};

export { GENERAL, EXTERNAL, STEPS, ADMIN, SUPER_ADMIN };
