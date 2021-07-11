import React from 'react';

import * as T from '../Typography';

const ReCaptcha = () => {
  return (
    <T.P color="gray9" mt={6}>
      This site is protected by reCAPTCHA and the Google{' '}
      <T.Link color="blue" to="https://policies.google.com/privacy" external>
        Privacy Policy
      </T.Link>{' '}
      and{' '}
      <T.Link color="blue" to="https://policies.google.com/terms" external>
        Terms of Service
      </T.Link>{' '}
      apply.
    </T.P>
  );
};

export default ReCaptcha;
