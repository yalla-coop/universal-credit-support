import { string, addMethod } from 'yup';
import * as errMsgs from './err-msgs';
import PNF from 'google-libphonenumber';

const phoneUtil = PNF.PhoneNumberUtil.getInstance();
addMethod(string, 'phone', function () {
  return this.test('phone', errMsgs.INVALID_PHONE, (value) => {
    const isValid = phoneUtil.isValidNumberForRegion(
      phoneUtil.parse(value, 'GB'),
      'GB'
    );
    return isValid;
  });
});
