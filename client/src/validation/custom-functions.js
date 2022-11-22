import { string, addMethod } from 'yup';
import * as errMsgs from './err-msgs';
import PNF from 'google-libphonenumber';

const phoneUtil = PNF.PhoneNumberUtil.getInstance();
addMethod(string, 'phone', function (a) {
  return this.test('phone', errMsgs.INVALID_PHONE, (value) => {
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

addMethod(string, 'optionalPhone', function (a) {
  return this.test('optionalPhone', errMsgs.INVALID_PHONE, (value) => {
    if (!value) return true;
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
