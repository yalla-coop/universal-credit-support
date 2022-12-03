import { useEffect } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme, { globalStyle } from './theme';
import { Route as CustomRoute } from './components';
import * as Pages from './pages';
import { navRoutes } from './constants';
import { ScrollToTop } from './helpers';
import StepsProvider from './context/steps';
import { AuthProvider } from './context/auth';
import { PublicOrgProvider } from './context/public-org';
import { createBrowserHistory } from 'history';
import AccessibilityProvider from './context/accessibility';
import { CommonProvider } from './context/common';
// import CookieBot from 'react-cookiebot';

import 'antd/dist/antd.css';

export const history = createBrowserHistory({ basename: window.BASE_URL });

function App() {
  useEffect(() => {
    localStorage.getItem('isFontLarge') === 'true'
      ? (document.getElementsByTagName('html')[0].style.fontSize = '1.25rem')
      : (document.getElementsByTagName('html')[0].style.fontSize = '1rem');
  }, []);
  return (
    <div className="app">
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <AccessibilityProvider>
          <StepsProvider>
            <AuthProvider>
              <CommonProvider>
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
                    <Route element={<PublicOrgProvider />}>
                      <Route
                        path={navRoutes.GENERAL.HOME}
                        exact
                        element={
                          <CustomRoute
                            Component={Pages.Home}
                            layout="general"
                          />
                        }
                      />

                      <Route
                        path={navRoutes.GENERAL.HOME_ORG}
                        exact
                        element={
                          <CustomRoute
                            Component={Pages.Home}
                            layout="general"
                          />
                        }
                      />

                      <Route
                        path={navRoutes.GENERAL.STEP_ORG}
                        exact
                        element={
                          <CustomRoute Component={Pages.Step} layout="step" />
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
                    </Route>
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
                      path={navRoutes.GENERAL.ACCESSIBILITY}
                      element={
                        <CustomRoute
                          Component={Pages.Accessibility}
                          layout="general"
                          showBack
                        />
                      }
                    />
                  </Routes>
                </Router>
              </CommonProvider>
            </AuthProvider>
          </StepsProvider>
        </AccessibilityProvider>
        {/* <CookieBot domainGroupId={domainGroupId} /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
