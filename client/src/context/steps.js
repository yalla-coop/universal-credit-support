import { createContext, useState, useContext, useEffect } from 'react';
import { message } from 'antd';

import { Steps } from '../api-calls';
import { t } from '../helpers';
import { useLang } from '../context/lang';

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
        existing.checklist,
        newStep.checklist
      );

      return {
        ...newStep,
        checklist: updatedChecklist,
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
  return steps || [];
};

const StepsContext = createContext({
  steps: [],
  checkUncheckItem: (stepName, itemKey) => {},
});

const formateStepsObj = (stepsArr) => {
  return stepsArr.reduce((acc, curr) => {
    const { stage } = curr;
    if (!acc[stage]) {
      acc[stage] = [];
    }
    acc[stage].push(curr);
    return acc;
  }, {});
};

const StepsProvider = ({ children, ...props }) => {
  const [steps, setSteps] = useState(getStepsFromStorage);
  const [stepsObj, setStepsObj] = useState({
    beforeClaiming: [],
    claiming: [],
    afterClaiming: [],
  });
  const [justCompletedId, setJustCompletedId] = useState('');
  const [loadingSteps, setLoadingSteps] = useState(false);
  const [stepsError, setStepsError] = useState('');
  const { lang } = useLang();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      setLoadingSteps(true);
      const hideLoading = message.loading('loading...');
      const { data: newSteps, error } = await Steps.getStepsContent({});
      if (mounted) {
        let updatedSteps = [];
        if (error) {
          setStepsError(error.message);
          message.error(t(`generalError`, lang), 2);
          // To update stepObj state
          updatedSteps = getStepsFromStorage();
        } else {
          const stepsFromLocal = getStepsFromStorage();
          updatedSteps = updateStepsInStorage(stepsFromLocal, newSteps);

          setSteps(updatedSteps);
        }

        const _stepsObj = formateStepsObj(updatedSteps);
        setStepsObj(_stepsObj);
        setLoadingSteps(false);
        hideLoading();
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  const checkUncheckItem = (stepName, itemKey) => {
    setSteps((prevSteps) => {
      const newSteps = prevSteps.map((step) => {
        if (step.name === stepName) {
          const newStep = { ...step };

          let uncheckedSteps = step.checklist.length;
          const newCheckListItems = step.checklist.map((item) => {
            const newItem = { ...item };

            if (newItem.title === itemKey) {
              newItem.isChecked = !item.isChecked;
            }

            if (newItem.isChecked) {
              uncheckedSteps--;
            }

            return newItem;
          });

          newStep.checklist = newCheckListItems;
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
    stepsObj,
    checkUncheckItem,
    justCompletedId,
    setJustCompletedId,
    stepsError,
    loadingSteps,
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
