import { fields, createSchema, validate as _validate } from '..';

const {
  requiredText,
  whereDoYouNeedToGo,
  thingsContent,
  optionalText,
  optionalArrayOfOptionalString,
} = fields;

const volunteer = createSchema({
  title: requiredText,
  description: requiredText,
  whereDoYouNeedToGo,
  timeRangeText: requiredText,
  thingsYouWillNeed: thingsContent,
  whatYouWillNeedToKnow: thingsContent,
  topTip: optionalText,
  otherTips: optionalArrayOfOptionalString,
  pageTitle: optionalText,
  pageDescription: optionalText,
});

const validate = (data) => _validate(volunteer, data);

export default validate;
