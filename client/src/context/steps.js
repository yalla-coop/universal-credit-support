import { createContext, useState, useContext } from 'react';

// TO DO -> content to come from server
const initialSteps = [
  {
    id: '1',
    stage: 'beforeClaiming',
    name: 'checkEligibility',
    title: 'Wait! Should I apply?',
    description: `Let's find out with a quick and easy benefit calculator`,
    pageTitle: `Should you claim?`,
    pageDescription: `Using the benefit calculator enables you to find out an estimate of how much Universal Credit you may be entitled to.`,
    thingsYouWillNeed: [],
    checkListItems: [
      {
        title: `Income details`,
        description: ``,
        thisCanInclude: [
          `Salaries from an employer or self-employment`,
          `Other Benefits you and/or your partner already receive`,
          `Private pensions`,
        ],
        tips: [`Benefit income and salaries can be found on P60s/P45s`],
        isChecked: false,
        stage: 'whatYouWillNeedToKnow',
      },
      {
        title: `Details of any capital, savings and investments`,
        description: ``,
        thisCanInclude: [],
        tips: [
          `This includes ALL money you hold anywhere, including in current bank accounts, ISAs and property you own that you don’t live in`,
        ],
        isChecked: false,
        stage: 'whatYouWillNeedToKnow',
      },
      {
        title: `Housing costs`,
        description: `You can get this from your landlord or mortgage provider.`,
        thisCanInclude: [
          `How much rent you are charged and how often`,
          `How much service charges you are charged and how often`,
          `Mortgage payments`,
          `Ground rent`,
        ],
        tips: [],
        isChecked: false,
        stage: 'whatYouWillNeedToKnow',
      },
      {
        title: `Childcare costs`,
        description: ``,
        thisCanInclude: [],
        tips: [],
        isChecked: false,
        stage: 'whatYouWillNeedToKnow',
      },
      {
        title: `Income details of any other adults living in the property that are not lodgers e.g. grown up children, elderly parents`,
        description: ``,
        thisCanInclude: [],
        tips: [],
        isChecked: false,
        stage: 'whatYouWillNeedToKnow',
      },
    ],
    isCompleted: false,
    isOptional: true,
    topTip: `The more accurate the information you give the more accurate the estimate will be.`,
    howLongDoesItTake: {
      timeRangeText: '15 to 25 minutes',
    },
    whereDoYouNeedToGo: {
      link:
        'https://www.entitledto.co.uk/benefits-calculator/Intro/Home?cid=0af743fb-414d-4559-a0c9-b88d26a88671',
      type: 'LINK',
      title: `Our Benefit Calculator`,
    },
  },
  {
    id: '2',
    stage: 'claiming',
    name: 'createAccount',
    title: 'Create account',
    description:
      'Create an account on the Government website. You’ll want to do this as soon as possible!',
    checkListItems: [
      { value: 'anEmailAddress', isChecked: false },
      { value: 'bankAccountDetails', isChecked: false },
      { value: 'accessPhone', isChecked: false },
      { value: 'partnerLinkingCode', isChecked: false },
    ],
    isCompleted: false,
    externalLink: true,
    externalButtonLink: 'CREATE_UNIVERSAL_CREDIT_ACCOUNT',
  },
  {
    id: '3',
    stage: 'claiming',
    name: 'claim',
    title: `Make the claim`,
    description: `Now it's time to complete the main part of the application form. Let's do this!`,
    checkListItems: [
      { value: 'AccountInfo', isChecked: false },
      { value: 'mobileAccess', isChecked: false },
      { value: 'bankAccount', isChecked: false },
      { value: 'homeDetails', isChecked: false },
      { value: 'housingCosts', isChecked: false },
      { value: 'childrenBenefit', isChecked: false },
      { value: 'incomeDetails', isChecked: false },
      { value: 'capitalDetails', isChecked: false },
      { value: 'responsibilities', isChecked: false },
      { value: 'bankAccountDetails', isChecked: false },
      { value: 'healthDetails', isChecked: false },
    ],
    isCompleted: false,
    externalLink: true,
    externalButtonLink: 'MAKE_YOUR_CLAIM',
  },
  {
    id: '4',
    stage: 'claiming',
    name: 'verifyIdentity',
    title: 'Verify Identity',
    description: `Claim submitted! Now to be considered, you'll need to 'verify' your identity.`,
    checkListItems: [
      { value: 'ID', isChecked: false },
      { value: 'details', isChecked: false },
    ],
    isCompleted: false,
  },

  {
    id: '5',
    stage: 'claiming',
    name: 'attendInterview',
    title: `Attend Interview`,
    description: `Nearly there! The final step to accessing your Universal Credit is an interview.`,
    checkListItems: [
      { value: 'nationalNumber', isChecked: false },
      { value: 'needs', isChecked: false },
      { value: 'limitations', isChecked: false },
    ],
    externalButtonLink: 'Call_0800_328_5644',
    isCompleted: false,
  },
  {
    id: '6',
    stage: 'afterClaiming',
    name: 'advance',
    title: 'Want to apply for an advance?',
    description: `Don't be scared about applying for this if you definitely do need it!`,
    checkListItems: [
      { value: 'accountInfo', isChecked: false },
      { value: 'phone', isChecked: false },
      { value: 'email', isChecked: false },
      { value: 'toDoList', isChecked: false },
      { value: 'claimantCommitment', isChecked: false },
    ],
    isCompleted: false,
    externalLink: true,
    externalButtonLink: 'GETTING_YOUR_FIRST_PAYMENT',
    isOptional: true,
  },
  {
    id: '7',
    stage: 'afterClaiming',
    name: 'payment',
    title: 'Getting your first payment',
    description:
      'First payment is made 1 month and 7 days after you submitted your claim...',
    checkListItems: [
      { value: 'accountInfo', isChecked: false },
      { value: 'phone', isChecked: false },
      { value: 'email', isChecked: false },
      { value: 'toDoList', isChecked: false },
      { value: 'claimantCommitment', isChecked: false },
    ],
    isCompleted: false,
    externalLink: true,
    externalButtonLink: 'GETTING_YOUR_FIRST_PAYMENT',
  },
];

const storeStepsIntoStorage = (steps) => {
  localStorage.setItem('steps', JSON.stringify(steps));
};

// TO DO -> WILL NEED TO CHANGE TO THINGS AND TIPS
const compareCheckListItems = (checkListItemsFromLocal, checkListItems) => {
  const updatedCheckListItems = checkListItems.map((checkListItem) => {
    const existing = checkListItemsFromLocal.find(
      (checkListItemFromLocal) =>
        checkListItem.title === checkListItemFromLocal.title
    );
    if (existing) {
      return {
        ...checkListItem,
        isChecked: existing.isChecked,
      };
    }
    return checkListItem;
  });
  return updatedCheckListItems;
};

// compare two objects and add or remove properties based on the first object
const updateStepsInStorage = (stepsFromLocal, newSteps) => {
  const updatedSteps = newSteps.map((newStep) => {
    const existing = stepsFromLocal.find((step) => newStep.id === step.id);

    if (existing) {
      const updatedChecklist = compareCheckListItems(
        existing.checkListItems,
        newStep.checkListItems
      );

      return {
        ...newStep,
        checkListItems: updatedChecklist,
        isCompleted: existing.isCompleted,
      };
    }
    return newStep;
  });
  storeStepsIntoStorage(updatedSteps);
  return updatedSteps;
};

const getStepsFromStorage = () => {
  const steps = JSON.parse(localStorage.getItem('steps'));
  if (steps && steps.length) {
    const updatedSteps = updateStepsInStorage(steps, initialSteps);
    return updatedSteps;
  } else {
    storeStepsIntoStorage(initialSteps);
    return initialSteps;
  }
};

const StepsContext = createContext({
  steps: initialSteps,
  checkUncheckItem: (stepName, itemKey) => {},
});

const StepsProvider = ({ children, ...props }) => {
  const [steps, setSteps] = useState(getStepsFromStorage);
  const [justCompletedId, setJustCompletedId] = useState('');

  const checkUncheckItem = (stepName, itemKey) => {
    console.log('TEST', stepName, itemKey);
    setSteps((prevSteps) => {
      const newSteps = prevSteps.map((step) => {
        if (step.name === stepName) {
          const newStep = { ...step };

          let uncheckedSteps = step.checkListItems.length;
          const newCheckListItems = step.checkListItems.map((item) => {
            const newItem = { ...item };

            if (newItem.title === itemKey) {
              newItem.isChecked = !item.isChecked;
            }

            if (newItem.isChecked) {
              uncheckedSteps--;
            }

            return newItem;
          });

          newStep.checkListItems = newCheckListItems;
          newStep.isCompleted = uncheckedSteps === 0;

          return newStep;
        }
        return { ...step };
      });

      storeStepsIntoStorage(newSteps);
      console.log('new', newSteps);
      return newSteps;
    });
  };

  const value = {
    steps,
    checkUncheckItem,
    justCompletedId,
    setJustCompletedId,
  };
  return (
    <StepsContext.Provider value={value} {...props}>
      {children}
    </StepsContext.Provider>
  );
};

export const useSteps = () => {
  const value = useContext(StepsContext);
  return value;
};

export default StepsProvider;
