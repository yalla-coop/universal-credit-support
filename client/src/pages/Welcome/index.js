import { Switch, Route } from 'react-router-dom';

import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';
import { navRoutes as n } from '../../constants';

const WelcomePage = () => {
  return (
    <Switch>
      <Route exact path={n.ADMIN.WELCOME1}>
        <Welcome1 />
      </Route>
      <Route exact path={n.ADMIN.WELCOME2}>
        <Welcome2 />
      </Route>
    </Switch>
  );
};

export default WelcomePage;
