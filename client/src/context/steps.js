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
    ],
    isCompleted: false,
    externalLink: true,
  },
  {
    id: '2',
    name: 'createAccount',
    checkListItems: [
      { value: 'anEmailAddress', isChecked: false },
      { value: 'bankAccountDetails', isChecked: false },
      { value: 'childcareCosts', isChecked: false },
    ],
    isCompleted: false,
    externalLink: true,
  },
  {
    id: '3',
    name: 'verifyIdentity',
    checkListItems: [
      { value: 'item1', isChecked: false },
      { value: 'item2', isChecked: false },
      { value: 'item3', isChecked: false },
    ],
    isCompleted: false,
  },
  {
    id: '4',
    name: 'apply',
    checkListItems: [
      { value: 'item1', isChecked: false },
      { value: 'item2', isChecked: false },
      { value: 'item3', isChecked: false },
    ],
    isCompleted: false,
  },
  {
    id: '5',
    name: 'check',
    checkListItems: [
      { value: 'item1', isChecked: false },
      { value: 'item2', isChecked: false },
      { value: 'item3', isChecked: false },
    ],
    isCompleted: false,
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

  const value = { steps, checkUncheckItem };
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
