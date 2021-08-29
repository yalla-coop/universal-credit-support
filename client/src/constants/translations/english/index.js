import errorMsgs from './error-msgs';
import menuItems from './menu-items';

export default {
  ...errorMsgs,
  ...menuItems,
  // Home page
  universalCreditOverview: 'Universal Credit Overview!',
  overviewText:
    'This is an overview of the Universal Credit application. Click on each step for more details.',

  // GENERAL
  informationYouWillNeed: 'Information you will need:',
  selectYourLanguage: 'Select your language',
  completed: 'Completed!',
  nextStep: 'Next step',
  callUsLinkText: 'Stuck? Call us for advice',
  accountDelete: ' If you’d like to delete this account, please contact',
  hydeHousing: 'Hyde Housing',
  yourUniqueLink: 'Your unique link',

  // STEPS
  // In subtitle field you can wrap any part of the text with
  // <strong>some bold text<strong> or <strong underline>ss<strong>
  checkEligibility: {
    title: 'Check Eligibility',
    secondaryTitle: 'Check eligibility (optional)',
    subtitle:
      'Using the benefit calculator enables you to find out an estimate of how much Universal Credit you may be entitled to.',
    externalButtonTitle: 'Eligibility Calculator',
    checkListItems: {
      incomeDetails: 'Income details',
      detailsOfAnySavings: 'Details of any capital and savings',
      housingCosts: 'Housing costs',
      childcareCosts: 'Childcare costs',
      incomeOthersDetails:
        'Income details of any other adults living in the property that are not lodgers e.g. grown up children  elderly parents',
    },
  },

  createAccount: {
    title: 'Create account',
    secondaryTitle: 'Create account',
    subtitle:
      'When you know you are eligible create your account as soon as possible on the Government website.',
    externalButtonTitle: 'Create account',
    checkListItems: {
      anEmailAddress: 'Email address',
      bankAccountDetails: 'Bank account',
      accessPhone: 'Access to your mobile phone (if you have one)',
      partnerLinkingCode:
        "Your partner's Universal Credit linking code (if you have a partner and they have one)",
    },
  },

  editDetails: {
    title: 'Edit Details',
    subtitle:
      'Below you can edit details for your customers such as your adviser contact line',
  },

  contact: {
    title: 'Contact Details',
  },

  claim: {
    title: 'Make your claim',
    secondaryTitle: 'Make your claim',
    subtitle:
      "Now it's time to complete the main part of the application form. Let's do this!",
    externalButtonTitle: 'Apply here',
    checkListItems: {
      AccountInfo:
        'Account log in information (that you created in the previous step)',
      mobileAccess: 'Access to the mobile phone stored for your account',
      bankAccount: 'A bank account',
      homeDetails:
        'Details of your home e.g. the information on your tenancy agreement',
      housingCosts: 'Housing costs',
      childrenBenefit: 'Benefit reference numbers for your children',
      incomeDetails: 'Income details',
      capitalDetails:
        'Details of any capital and savings - includes money in your current account',
      responsibilities:
        'Details of caring responsibilities for a disabled person (if providing over 35 hours per week)',
      bankAccountDetails:
        'Your bank account details where UC will be paid into',
      healthDetails:
        'Details of any health issues that affect your ability to work',
    },
  },
  verifyIdentity: {
    title: 'Verify Identity',
    secondaryTitle: 'Verify identity',
    subtitle:
      'Before your claim can be considered, you will need to ‘verify’ your identity. When you finish your application they will automatically direct you to Gov UK Verify.',
    // externalButtonTitle: 'GOV UK Verify',
    checkListItems: {
      ID: 'ID (e.g. Passport / Driving Licence / Debit or Credit card)',
      details:
        'Details of any credit agreements e.g. dates you took out your mobile phone contract or a credit card',
    },
  },
  attendInterview: {
    title: 'Attend Interview',
    secondaryTitle: 'Attend Interview',
    subtitle:
      "This might be in person or by phone. If you haven't been able to verify your identity online you might need to have an extra interview to sort that out first.",
    externalButtonTitle: 'Call 0800 328 5644',

    checkListItems: {
      nationalNumber: 'National Insurance number',
      needs: 'When arranging an interview, ask them what you need to bring',
      limitations:
        "Make sure you're ready to tell them about any limitations you have on getting work",
    },
  },
  apply: {
    title: 'Get an advance',
    secondaryTitle: 'Apply for an advance (optional)',
    subtitle:
      'Taking an Advance is optional and it is a <strong underline>loan<strong> and it will be taken from your UC at an amount <strong underline>set by the DWP.<strong>',
    externalButtonTitle: 'Apply for advance',
    checkListItems: {
      accountInfo: 'Account log in information (created in the Apply step)',
      phone: 'Mobile phone',
      details:
        'Details of your job centre where you have had your interview and identity checked',
    },
  },
  payment: {
    title: 'First Payment',
    secondaryTitle: 'Getting your first payment',
    subtitle:
      "<strong>First payment<strong> is made 1 month and 7 days after you submitted your claim. Make sure you have done the things you need to do listed on this step or you won't get paid!",
    externalButtonTitle: 'Check account',
    checkListItems: {
      accountInfo:
        'Account log in information created in the set up account stage',
      phone: 'Mobile phone you have registered with UC (if using one)',
      email: 'Access to your email address that you have registered with UC',
      toDoList: 'Completed all your to-do-list tasks',
      claimantCommitment: 'Accepted your claimant commitment',
    },
  },
};
