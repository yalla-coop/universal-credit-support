import { Routes, Route } from 'react-router-dom';

import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';
import { navRoutes as n } from '../../../constants';

const WelcomePage = () => {
  return (
    <Routes>
      <Route exact path={n.ADMIN.WELCOME1} element={Welcome1} />
      <Route exact path={n.ADMIN.WELCOME2} element={Welcome2} />
    </Routes>
  );
};

export default WelcomePage;
