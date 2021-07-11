import { string, addMethod } from 'yup';
import * as errMsgs from './err-msgs';

const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
// eslint-disable-next-line func-names
addMethod(string, 'phone', function () {
  return this.test('phone', errMsgs.INVALID_PHONE, (value) =>
    rePhoneNumber.test(value)
  );
});
