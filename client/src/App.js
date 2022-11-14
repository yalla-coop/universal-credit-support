import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme, { globalStyle } from './theme';
import { Route as CustomRoute } from './components';
import * as Pages from './pages';
import { navRoutes } from './constants';
import { ScrollToTop } from './helpers';
import LangProvider from './context/lang';
import { AuthProvider } from './context/auth';
import { PublicOrgProvider } from './context/public-org';
import { createBrowserHistory } from 'history';

// import CookieBot from 'react-cookiebot';

import 'antd/dist/antd.css';

export const history = createBrowserHistory({ basename: window.BASE_URL });

function App() {
  return (
    <div className="app">
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <LangProvider>
          <AuthProvider>
            <Router basename={process.env.PUBLIC_URL}>
              <ScrollToTop />
              <Routes>
                <Route
                  path={navRoutes.GENERAL.NOT_FOUND}
                  element={
                    <CustomRoute
                      Component={<p>Page Not Found</p>}
                      layout="general"
                    />
                  }
                />
                <Route
                  exact
                  path={navRoutes.ADMIN.LOGIN}
                  element={
                    <CustomRoute
                      Component={Pages.Login}
                      layout="splitScreen"
                      side="left"
                      gradient="secondary"
                      publicOnly
                    />
                  }
                />
                <Route
                  exact
                  path={navRoutes.ADMIN.SIGNUP}
                  element={
                    <CustomRoute
                      Component={Pages.Signup}
                      layout="splitScreen"
                      side="left"
                      gradient="secondary"
                      publicOnly
                    />
                  }
                />
              </Routes>

              {/* ALL ADMIN PAGES */}
              <Pages.Admin />
              <Routes>
                <Route
                  path={navRoutes.GENERAL.HOME}
                  exact
                  element={
                    <PublicOrgProvider>
                      <CustomRoute Component={Pages.Home} layout="general" />
                    </PublicOrgProvider>
                  }
                />

                <Route
                  exact
                  path={navRoutes.STEPS.STEP}
                  element={<CustomRoute Component={Pages.Step} layout="step" />}
                />

                <Route
                  path={navRoutes.GENERAL.HOME_ORG}
                  exact
                  element={
                    <PublicOrgProvider>
                      <CustomRoute Component={Pages.Home} layout="general" />
                    </PublicOrgProvider>
                  }
                />

                <Route
                  path={navRoutes.GENERAL.STEP_ORG}
                  exact
                  element={
                    <PublicOrgProvider>
                      <CustomRoute Component={Pages.Step} layout="step" />
                    </PublicOrgProvider>
                  }
                />

                <Route
                  exact
                  path={navRoutes.GENERAL.FORGET_PASSWORD}
                  element={
                    <CustomRoute
                      Component={Pages.ForgotPassword}
                      layout="splitScreen"
                      side="left"
                      gradient="secondary"
                    />
                  }
                />
                <Route
                  exact
                  path={navRoutes.GENERAL.RESET_PASSWORD}
                  element={
                    <CustomRoute
                      Component={Pages.ResetPassword}
                      layout="splitScreen"
                      side="left"
                      gradient="secondary"
                    />
                  }
                />
                <Route
                  exact
                  path={navRoutes.GENERAL.ORG}
                  element={
                    <CustomRoute Component={Pages.Home} layout="general" />
                  }
                />
              </Routes>
            </Router>
          </AuthProvider>
        </LangProvider>
        {/* <CookieBot domainGroupId={domainGroupId} /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
