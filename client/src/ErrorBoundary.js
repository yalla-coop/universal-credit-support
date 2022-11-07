import React from 'react';
import * as Sentry from '@sentry/react';
const ErrorBoundary = ({ children }) => {
  return <Sentry.ErrorBoundary>{children}</Sentry.ErrorBoundary>;
};

export default ErrorBoundary;
