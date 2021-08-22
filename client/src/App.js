import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import theme, { globalStyle } from './theme';
import { Route } from './components';
import * as Pages from './pages';
import { navRoutes } from './constants';
import { ScrollToTop } from './helpers';
import LangProvider from './context/lang';
import StepsProvider from './context/steps';

// import CookieBot from 'react-cookiebot';

import 'antd/dist/antd.css';

// const domainGroupId = process.env.REACT_APP_COOKIEBOT_DOMAIN_ID;

function App() {
  return (
    <div className="app">
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <LangProvider>
          <StepsProvider>
            <Router basename={process.env.PUBLIC_URL}>
              <ScrollToTop />
              <Switch>
                <Route
                  exact
                  path={navRoutes.GENERAL.HOME}
                  Component={Pages.Home}
                  layout="general"
                />
                <Route
                  exact
                  path="/test"
                  Component={() => <p>content comes here!!</p>}
                  layout="splitScreen"
                  side="left"
                  gradient="secondary"
                  showColorOnMobile
                />
                <Route
                  exact
                  path="/test1"
                  Component={() => <p>content comes here!!</p>}
                  layout="splitScreen"
                  side="left"
                  color="#006370"
                />
                <Route
                  exact
                  path="/test2"
                  Component={() => <p>content comes here!!</p>}
                  layout="dashboard"
                />
                <Route
                  exact
                  path="/test3"
                  Component={() => <p>content comes here!!</p>}
                  layout="dashboard"
                  showMobileMenu
                />
                <Route
                  exact
                  path={navRoutes.STEPS.STEP}
                  Component={Pages.Step}
                  layout="step"
                />
                <Route
                  exact
                  path={navRoutes.ADMIN.LOGIN}
                  Component={Pages.Login}
                  layout="splitScreen"
                  side="left"
                  gradient="secondary"
                />
              </Switch>
            </Router>
          </StepsProvider>
        </LangProvider>
        {/* <CookieBot domainGroupId={domainGroupId} /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
