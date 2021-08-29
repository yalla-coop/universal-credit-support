import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';

const WelcomePage = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Welcome1 />
        </Route>
        <Route path={`${path}/2`}>
          <Welcome2 />
        </Route>
      </Switch>
    </div>
  );
};

export default WelcomePage;
