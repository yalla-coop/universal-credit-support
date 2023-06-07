import helmet from 'helmet';
// import config from '../../config';

// const { bucket, bucketRegion } = config.aws;
const helmetMiddleware = helmet({
  // contentSecurityPolicy: {
  //   useDefaults: true,
  //   reportOnly: false,
  //   directives: {
  //     ...helmet.contentSecurityPolicy.getDefaultDirectives(),
  //     // fallback for other directives
  //     // allowed urls to make requests to
  //     'default-src': [
  //       "'self'",
  //       // 'https://www.google-analytics.com/',
  //       // 'https://consent.cookiebot.com/',
  //       // 'https://o557886.ingest.sentry.io/',
  //       // 'https://www.google.com/recaptcha/',
  //       // 'https://consentcdn.cookiebot.com/',
  //       // 'https://www.gstatic.com/recaptcha/',
  //       // `https://${bucket}.s3.${bucketRegion}.amazonaws.com/`,
  //     ],
  //     // trusted <scripts>
  //     'script-src': [
  //       "'self'",
  //       // 'https://www.google-analytics.com/',
  //       // 'https://consent.cookiebot.com/',
  //       // 'https://consentcdn.cookiebot.com/',
  //       // 'https://o557886.ingest.sentry.io/',
  //       // 'https://www.google.com/recaptcha/',
  //       // 'https://www.gstatic.com/recaptcha/',
  //     ],
  //     'img-src': [
  //       "'self'",
  //       'data:',
  //       // `https://${bucket}.s3.${bucketRegion}.amazonaws.com/`,
  //     ],
  //   },
  // },
  contentSecurityPolicy: false,
  dnsPrefetchControl: { allow: true },
  // referrerPolicy: { policy: 'strict-origin' },
  crossOriginEmbedderPolicy: false,
});

export default helmetMiddleware;
