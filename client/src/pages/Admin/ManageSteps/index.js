import { useEffect, useState } from 'react';
import { Grid as G, Typography as T, Modal } from '../../../components';

import DragDrop from './DragDrop';
import { stages } from '../../../constants/data-types';
import { useSteps } from '../../../context/steps';

const columnsFromBackend = {
  col1: {
    name: 'Before claiming',
    stage: stages.beforeClaiming,
    items: [],
  },
  col2: {
    name: 'Claiming',
    stage: stages.claiming,
    items: [],
  },
  col3: {
    name: 'After claiming',
    stage: stages.afterClaiming,
    items: [],
  },
};

const reorderSteps = (cols) => {
  let newSteps = [];
  let cumulativeIndex = 0;
  Object.keys(cols).forEach((key) => {
    cols[key].items.forEach((item) => {
      cumulativeIndex++;
      newSteps.push({
        ...item,
        stage: cols[key].stage,
        stepOrder: cumulativeIndex,
      });
    });
  });
  return newSteps;
};

const ManageSteps = () => {
  const [beforeClaiming, setBeforeClaiming] = useState([]);
  const [claiming, setClaiming] = useState([]);
  const [afterClaiming, setAfterClaiming] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [columns, setColumns] = useState(columnsFromBackend);
  // Commented for linter because handleSubmit is not used
  //const [error, setError] = useState('');

  const { steps } = useSteps();
  useEffect(() => {
    setBeforeClaiming(
      steps
        .filter((item) => item.stage === stages.beforeClaiming)
        .sort((a, b) => (a.stepOrder < b.stepOrder ? -1 : 1))
    );

    setClaiming(
      steps
        .filter((item) => item.stage === stages.claiming)
        .sort((a, b) => (a.stepOrder < b.stepOrder ? -1 : 1))
    );

    setAfterClaiming(
      steps
        .filter((item) => item.stage === stages.afterClaiming)
        .sort((a, b) => (a.stepOrder < b.stepOrder ? -1 : 1))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setColumns({
      col1: {
        name: 'Before claiming',
        items: beforeClaiming,
        stage: stages.beforeClaiming,
      },
      col2: {
        name: 'Claiming',
        stage: stages.claiming,
        items: claiming,
      },
      col3: {
        name: 'After claiming',
        stage: stages.afterClaiming,
        items: afterClaiming,
      },
    });
  }, [beforeClaiming, claiming, afterClaiming]);

  /*
  // Commented for linter because handleSubmit is not used
  const handleSubmit = () => {
    const newSteps = reorderSteps(columns);
    const { error } = Steps.updateSteps({ data: newSteps });
    if (error) {
      setError(error);
    } else {
      setIsModalVisible(true);
    }
    return true;
  };
  */

  return (
    <div style={{ maxWidth: '900px' }}>
      <G.Row>
        <G.Col w={[4, 6, 6]}>
          <T.H1 style={{ width: '100%' }} mb="5">
            Manage Steps
          </T.H1>
          {/* SHOW WHEN THIS FEATURE IS PUT IN */}
          {/* <T.P color="neutralDark">
            Drag and drop the steps below to change the order
          </T.P> */}
        </G.Col>
      </G.Row>
      <DragDrop
        beforeClaiming={beforeClaiming}
        claiming={claiming}
        afterClaiming={afterClaiming}
        columns={columns}
        setColumns={setColumns}
      />

      {/* SHOW WHEN THIS FEATURE IS PUT IN */}
      {/* <G.Row mt="5">
        <G.Col w={[4, 6, 4]}>
          {error && <T.P color="error">{error}</T.P>}
          <Button
            variant="primary"
            text="Save changes"
            onClick={handleSubmit}
          />
        </G.Col>
      </G.Row> */}
      <Modal
        visible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        // eslint-disable-next-line no-console
        parentFunc={() => console.log(reorderSteps(columns))}
        type="updateSuccess"
        title="Updated"
        description="Changes successfully updated."
        btnText="Okay"
      />
    </div>
  );
};

export default ManageSteps;
