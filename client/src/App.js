import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import {
  BrowserRouter as Router,
  Switch,
  Route as RouterRoute,
} from 'react-router-dom';
import theme, { globalStyle } from './theme';
import { Route } from './components';
import * as Pages from './pages';
import { navRoutes } from './constants';
import { ScrollToTop } from './helpers';
import LangProvider from './context/lang';
import StepsProvider from './context/steps';
import { AuthProvider } from './context/auth';

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
            <AuthProvider>
              <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <Switch>
                  <Route
                    exact
                    path={navRoutes.ADMIN.LOGIN}
                    Component={Pages.Login}
                    layout="splitScreen"
                    side="left"
                    gradient="secondary"
                    publicOnly
                  />
                  <Route
                    exact
                    path={navRoutes.ADMIN.SIGNUP}
                    Component={Pages.Signup}
                    layout="splitScreen"
                    side="left"
                    gradient="secondary"
                    publicOnly
                  />

                  {/* ALL ADMIN PAGES */}
                  <RouterRoute path={navRoutes.ADMIN.BASE}>
                    <Pages.Admin />
                  </RouterRoute>

                  <Route
                    exact
                    path={navRoutes.GENERAL.HOME}
                    Component={Pages.Home}
                    layout="general"
                  />
                  <Route
                    exact
                    path={navRoutes.GENERAL.HOME_ORG}
                    Component={Pages.Home}
                    layout="general"
                  />
                  <Route
                    exact
                    path={navRoutes.STEPS.STEP}
                    Component={Pages.Step}
                    layout="step"
                  />
                  <Route
                    exact
                    path={navRoutes.STEPS.STEP_ORG}
                    Component={Pages.Step}
                    layout="step"
                  />

                  <Route
                    exact
                    path={navRoutes.GENERAL.FORGET_PASSWORD}
                    Component={Pages.ForgotPassword}
                    layout="splitScreen"
                    side="left"
                    gradient="secondary"
                  />
                  <Route
                    exact
                    path={navRoutes.GENERAL.RESET_PASSWORD}
                    Component={Pages.ResetPassword}
                    layout="splitScreen"
                    side="left"
                    gradient="secondary"
                  />
                  <Route
                    exact
                    path={navRoutes.GENERAL.ORG}
                    Component={Pages.Home}
                    layout="general"
                  />
                </Switch>
              </Router>
            </AuthProvider>
          </StepsProvider>
        </LangProvider>
        {/* <CookieBot domainGroupId={domainGroupId} /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
