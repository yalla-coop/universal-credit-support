import { string, boolean } from 'yup';
import * as errMsgs from './err-msgs';

export const requiredText = string().required(errMsgs.DEFAULT_REQUIRED);

export const firstName = string()
  .min(1, errMsgs.DEFAULT_REQUIRED)
  .max(20)
  .required(errMsgs.DEFAULT_REQUIRED);

export const lastName = string()
  .min(1, errMsgs.DEFAULT_REQUIRED)
  .max(20)
  .required(errMsgs.DEFAULT_REQUIRED);

export const email = string()
  .email(errMsgs.INVALID_EMAIL)
  .required(errMsgs.DEFAULT_REQUIRED);

export const password = string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
    errMsgs.SHORT_PASSWORD,
  )
  .required(errMsgs.DEFAULT_REQUIRED);

export const agreedOnTerms = boolean()
  .oneOf([true], errMsgs.SHOULD_AGREE_ON_TERMS)
  .required(errMsgs.DEFAULT_REQUIRED);
