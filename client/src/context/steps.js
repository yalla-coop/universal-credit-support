import { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../helpers';
import { Steps } from '../api-calls';
import { t } from '../helpers';

const storeStepsIntoStorage = (steps) => {
  localStorage.setItem('steps', JSON.stringify(steps));
};

// TO DO -> WILL NEED TO CHANGE TO THINGS AND TIPS
const compareCheckListItems = (
  checkListItemsFromLocal = [],
  checkListItems = []
) => {
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
  const { i18n } = useTranslation();
  const { lng } = useLanguage();
  const [steps, setSteps] = useState(getStepsFromStorage);
  const [stepsObj, setStepsObj] = useState({
    beforeClaiming: [],
    claiming: [],
    afterClaiming: [],
  });
  const [justCompletedId, setJustCompletedId] = useState('');
  const [loadingSteps, setLoadingSteps] = useState(false);
  const [stepsError, setStepsError] = useState('');
  const location = useLocation();

  const adminPages = location?.pathname?.includes('/admin/');

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      setLoadingSteps(true);
      const { data: newSteps, error } = await Steps.getStepsContent({
        lng: adminPages ? 'en' : lng,
      });
      if (mounted) {
        let updatedSteps = [];
        if (error) {
          setStepsError(error.message);
          message.error(t(`generalError`, lng), 2);
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
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, [lng, adminPages]);

  useEffect(() => {
    const updatedSteps = steps.map((step) => {
      if (step.id === justCompletedId) {
        return { ...step, isCompleted: true };
      }
      return step;
    });
    const _stepsObj = formateStepsObj(updatedSteps);
    i18n.addResourceBundle(lng, 'stepsObj', {
      stepsObj: _stepsObj,
    });
    setStepsObj(_stepsObj);
  }, [justCompletedId, steps, i18n, lng]);

  const checkUncheckItem = (stepId, itemKey) => {
    setSteps((prevSteps) => {
      const newSteps = prevSteps.map((step) => {
        if (step.id === stepId) {
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

  const markAsComplete = (stepId) => {
    setSteps((prevSteps) => {
      const newSteps = prevSteps.map((step) => {
        if (step.id === stepId) {
          const newChecklist = step.checklist.map((item) => ({
            ...item,
            isChecked: true,
          }));

          return { ...step, checklist: newChecklist, isCompleted: true };
        }
        return { ...step };
      });

      storeStepsIntoStorage(newSteps);
      setJustCompletedId(stepId);
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
    markAsComplete,
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
