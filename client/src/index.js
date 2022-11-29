import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import ReactGA from 'react-ga';
import { BrowserTracing } from '@sentry/tracing';
import './i18n';
// import ReactGA from 'react-ga';
import ErrorBoundary from './ErrorBoundary';

if (process.env.NODE_ENV === 'production') {
  // SENTRY
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 0.5,
  });

  // GOOGLE ANALYTICS
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </ErrorBoundary>
);

reportWebVitals();
