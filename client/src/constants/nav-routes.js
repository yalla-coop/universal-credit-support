const GENERAL = {
  HOME: '/',
  LOGIN: '/login',
  UNAUTHORIZED: '/unauthorized',
  FORGET_PASSWORD: '/forget-password',
};

const admin = '/admin';

const ADMIN = {
  HOME: `${admin}/home`,
  EDIT_DETAILS: `${admin}/edit-details`,
  CUSTOMISE_LOG_OUT: `${admin}/customise-log-out`,
  CREATE_UNIQUE_LINK: `${admin}/create-unique-link`,
  CREATE_UNIQUE_LINK_SUCCESS: `${admin}/create-unique-link/success`,
  SIGNUP: `${admin}/signup`,
  LOGIN: `${admin}/login`,
  DASHBOARD: `${admin}/dashboard`,
};

const SUPER_ADMIN = {
  HOME: `${admin}/home`,
  EDIT_CONTENT: `${admin}/edit-content`,
  EDIT_DETAILS: `${admin}/edit-details`,
  ORGANISATIONS: `${admin}/organisations`,
  CUSTOMISE_LOG_OUT: `${admin}/customise-log-out`,
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
};

const STEPS = {
  STEP: '/steps/:id',
};

export { GENERAL, EXTERNAL, STEPS, ADMIN, SUPER_ADMIN };
