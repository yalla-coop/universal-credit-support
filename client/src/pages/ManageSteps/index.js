import { useEffect, useState } from 'react';
import { Grid as G, Typography as T } from '../../components';

import DragDrop from './DragDrop';
import steps from './dummyData.js';

const ManageSteps = () => {
  const [beforeClaiming, setBeforeClaiming] = useState([]);
  const [claiming, setClaiming] = useState([]);
  const [afterClaiming, setAfterClaiming] = useState([]);

  useEffect(() => {
    setBeforeClaiming(
      steps
        .filter((item) => item.stage === 'beforeClaiming')
        .sort((a, b) => (a.stepOrder < b.stepOrder ? -1 : 1))
    );

    setClaiming(
      steps
        .filter((item) => item.stage === 'claiming')
        .sort((a, b) => (a.stepOrder < b.stepOrder ? -1 : 1))
    );

    setAfterClaiming(
      steps
        .filter((item) => item.stage === 'afterClaiming')
        .sort((a, b) => (a.stepOrder < b.stepOrder ? -1 : 1))
    );
  }, []);

  return (
    <>
      <G.Row>
        <G.Col w={[4, 6, 6]}>
          <T.H1 style={{ width: '100%' }} mb="5">
            Manage Steps
          </T.H1>
          <T.P color="neutralDark">
            Drag and drop the steps below to change the order
          </T.P>
        </G.Col>
      </G.Row>
      <DragDrop
        beforeClaiming={beforeClaiming}
        claiming={claiming}
        afterClaiming={afterClaiming}
      />
    </>
  );
};

export default ManageSteps;
