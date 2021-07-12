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
    subtitle:
      'You can check your eligibility to claim Universal Credit with an eligibility calculator.',
    externalButtonTitle: 'Eligibility calculator',
    externalLink: '',
    checkListItems: {
      incomeDetails: 'Income details',
      detailsOfAnySavings: 'Details of any savings',
      housingCosts: 'Housing costs',
    },
  },
  createAccount: {
    title: 'Create account',
    subtitle:
      'When you know you are eligible you can start your application on the Government website.',
    externalButtonTitle: 'Create Universal Credit account',
    externalLink: '',
    checkListItems: {
      anEmailAddress: 'An email address',
      bankAccountDetails: 'Bank account details',
      childcareCosts: 'Childcare costs',
    },
  },
};
