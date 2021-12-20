import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import ReactGA from 'react-ga';
import { Integrations } from '@sentry/tracing';

// import ReactGA from 'react-ga';
import ErrorBoundary from './ErrorBoundary';

if (process.env.NODE_ENV === 'production') {
  // SENTRY
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0.1,
  });

  // GOOGLE ANALYTICS
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
