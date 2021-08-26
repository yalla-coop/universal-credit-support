import * as Sentry from '@sentry/node';
// eslint-disable-next-line no-unused-vars
import * as Tracing from '@sentry/tracing';

import config from '../../config';
import * as constants from '../../constants';

const { PRODUCTION } = constants.envTypes;

function configureSentry(app) {
  if (config.common.env === PRODUCTION) {
    Sentry.init({
      dsn: config.common.sentryDNS,
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
      ],
      tracesSampleRate: 0.5,
      beforeSend(event, hint) {
        const exception = hint.originalException;
        if (exception && exception.message) {
          // eslint-disable-next-line no-param-reassign
          event.fingerprint = ['{{ default }}', String(exception.message)];
        }
        return event;
      },
    });
  }

  return Sentry;
}

export default configureSentry;
