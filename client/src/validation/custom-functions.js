import { string, addMethod } from 'yup';
import * as errMsgs from './err-msgs';
import PNF from 'google-libphonenumber';

const phoneUtil = PNF.PhoneNumberUtil.getInstance();
addMethod(string, 'phone', function (a) {
  return this.test('is-jimmy', errMsgs.INVALID_PHONE, (value) => {
    if (!value) return false;
    try {
      const isValid = phoneUtil.isValidNumberForRegion(
        phoneUtil.parse(value, 'GB'),
        'GB'
      );
      return isValid;
    } catch (error) {
      return false;
    }
  });
});
