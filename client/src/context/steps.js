import { createContext, useState, useContext } from 'react';

const initialSteps = [
  // keys here should match the translation keys
  {
    id: '1',
    name: 'checkEligibility',
    checkListItems: [
      { value: 'incomeDetails', isChecked: false },
      { value: 'detailsOfAnySavings', isChecked: false },
      { value: 'housingCosts', isChecked: false },
      { value: 'childcareCosts', isChecked: false },
      { value: 'incomeOthersDetails', isChecked: false },
    ],
    isCompleted: false,
    externalLink: true,
    externalButtonLink: 'ELIGIBILITY_CALCULATOR',
  },
  {
    id: '2',
    name: 'createAccount',
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
    name: 'claim',
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
    name: 'verifyIdentity',
    checkListItems: [
      { value: 'ID', isChecked: false },
      { value: 'details', isChecked: false },
    ],
    isCompleted: false,
  },
  {
    id: '5',
    name: 'attendInterview',
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
    name: 'apply',
    checkListItems: [
      { value: 'accountInfo', isChecked: false },
      { value: 'phone', isChecked: false },
      { value: 'details', isChecked: false },
    ],
    isCompleted: false,
    externalLink: true,
    externalButtonLink: 'ONLINE_APPLICATION_FORM',
  },
  {
    id: '7',
    name: 'payment',
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

const getStepsFromStorage = () => {
  const steps = JSON.parse(localStorage.getItem('steps'));
  if (steps && steps.length) {
    return steps;
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
