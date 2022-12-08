import { fields, createSchema, validate as _validate } from '..';

const { resourceObjLink, resourceObjPhone } = fields;

const schema = createSchema({
  BENEFIT_CALCULATOR: resourceObjLink,
  BUDGET_PLANNER: resourceObjLink,
  BUDGET_PLANNER_PDF: resourceObjLink,
  DEBT_ADVICE: resourceObjLink,
  EMPLOYMENT_SERVICES: resourceObjLink,
  GRANT_SEARCH: resourceObjLink,
  MENTAL_HEALTH_1: resourceObjLink,
  MENTAL_HEALTH_2: resourceObjLink,
  MENTAL_HEALTH_3: resourceObjLink,
  STILL_NEED_HELP: resourceObjPhone,
});

const validate = (data) => {
  return _validate(schema, data);
};

export default validate;
