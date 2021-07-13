import errorMsgs from './error-msgs';

export default {
  ...errorMsgs,

  // Home page
  universalCreditOverview: 'Universal Credit Overview!',
  overviewText:
    'This is an overview of the Universal Credit application. Click on each step for more details.',

  // GENERAL
  informationYouWillNeed: 'Information you will need:',
  selectYourLanguage: 'Select your language',
  completed: 'Completed!',
  nextStep: 'Next step',
  callUsLinkText: 'Stuck? Call us for advice', //ToDo change CallUsLink component text

  // STEPS
  checkEligibility: {
    title: 'Check Eligibility',
    secondaryTitle: 'Check Eligibility',
    subtitle:
      'You can check your eligibility to claim Universal Credit with an eligibility calculator.',
    externalButtonTitle: 'Eligibility calculator',
    checkListItems: {
      incomeDetails: 'Income details',
      detailsOfAnySavings: 'Details of any savings',
      housingCosts: 'Housing costs',
    },
  },
  createAccount: {
    title: 'Create account',
    secondaryTitle: 'Create account',
    subtitle:
      'When you know you are eligible you can start your application on the Government website.',
    externalButtonTitle: 'Create Universal Credit account',
    checkListItems: {
      anEmailAddress: 'An email address',
      bankAccountDetails: 'Bank account details',
      childcareCosts: 'Childcare costs',
    },
  },
  verifyIdentity: {
    title: 'Verify Identity',
    secondaryTitle: 'Information',
    subtitle: 'As part of the process, you must verify your identity.',
    externalButtonTitle: 'GOV UK Verify',
    checkListItems: {
      item1: 'Item 1',
      item2: 'Item 2',
      item3: 'Item 3',
    },
  },
  apply: {
    title: 'Apply',
    secondaryTitle: 'Universal Credit Application',
    subtitle:
      'When you have created your account you can complete the main part of the application form.',
    externalButtonTitle: 'Online Application Form',
    checkListItems: {
      item1: 'Item 1',
      item2: 'Item 2',
      item3: 'Item 3',
    },
  },
  check: {
    title: 'Check',
    secondaryTitle:
      'This may be an interview on the telephone or face to face.',
    subtitle:
      'After you have completed your application you will receive an appointment for an interview.',
    checkListItems: {
      item1: 'Item 1',
      item2: 'Item 2',
      item3: 'Item 3',
    },
  },
};
