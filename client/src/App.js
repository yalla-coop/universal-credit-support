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
    <div className="app" style={{ minHeight: '100vh', display: 'flex' }}>
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

                {/* ORGS PUBLIC PAGES */}
                <Route element={<PublicOrgProvider />}>
                  <Route
                    exact
                    path={navRoutes.PUBLIC_ORG.SECTION}
                    element={
                      <CustomRoute Component={Pages.Section} layout="general" />
                    }
                  />

                  <Route
                    exact
                    path={navRoutes.PUBLIC_ORG.SUBSECTIONS}
                    element={
                      <CustomRoute
                        Component={Pages.SubSections}
                        layout="general"
                      />
                    }
                  />
                  <Route
                    exact
                    path={navRoutes.PUBLIC_ORG.BUDGETING}
                    element={
                      <CustomRoute
                        Component={Pages.Budgeting}
                        layout="general"
                      />
                    }
                  />
                  <Route
                    exact
                    path={navRoutes.PUBLIC_ORG.MENTAL_HEALTH}
                    element={
                      <CustomRoute
                        Component={Pages.MentalHeath}
                        layout="general"
                      />
                    }
                  />
                  <Route
                    path={navRoutes.PUBLIC_ORG.HOME}
                    exact
                    element={
                      <CustomRoute Component={Pages.Home} layout="general" />
                    }
                  />
                  <Route
                    path={navRoutes.PUBLIC_ORG.HOME_ORG}
                    exact
                    element={
                      <CustomRoute Component={Pages.Home} layout="general" />
                    }
                  />
                </Route>
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
