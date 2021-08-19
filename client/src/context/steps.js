import { createContext, useState, useContext } from 'react';

// TO DO -> content to come from server
const initialSteps = [
  {
    id: '1',
    stage: 'beforeClaiming',
    name: 'checkEligibility',
    title: 'Wait! Should I apply?',
    description: `Let's find out with a quick and easy benefit calculator`,
    checkListItems: [
      { value: 'incomeDetails', isChecked: false },
      { value: 'detailsOfAnySavings', isChecked: false },
      { value: 'housingCosts', isChecked: false },
      { value: 'childcareCosts', isChecked: false },
      { value: 'incomeOthersDetails', isChecked: false },
    ],
    isCompleted: true,
    externalLink: true,
    externalButtonLink: 'ELIGIBILITY_CALCULATOR',
    isOptional: true,
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
    title: 'Verify Idenity',
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
        checkListItem.value === checkListItemFromLocal.value
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
    updateStepsInStorage(steps, initialSteps);
    return initialSteps;
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
    setSteps((prevSteps) => {
      const newSteps = prevSteps.map((step) => {
        if (step.name === stepName) {
          const newStep = { ...step };

          let uncheckedSteps = step.checkListItems.length;
          const newCheckListItems = step.checkListItems.map((item) => {
            const newItem = { ...item };

            if (newItem.value === itemKey) {
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
