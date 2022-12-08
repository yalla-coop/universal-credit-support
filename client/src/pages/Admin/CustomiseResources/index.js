import { useReducer, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';
import { defaultResources } from '../../../constants/resources';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Modal,
} from '../../../components';
import * as S from './style';
import { customiseResources as validate } from '../../../validation/schemas';
import { Organisations } from '../../../api-calls';
import { useAdminOrg } from '../../../context/admin-org';
import { useAuth } from '../../../context/auth';

const defaultResourcesObj = defaultResources?.reduce((acc, curr) => {
  acc[curr.key] = curr;
  return acc;
}, {});

const { Row, Col } = Grid;

const initialState = {
  formData: [],
  httpError: '',
  validationErrs: {},
  loading: false,
  isModalVisible: false,
};

function reducer(state, newState) {
  let value = newState;
  if (typeof newState === 'function') {
    value = newState(state);
  }

  return { ...state, ...value };
}

const CustomiseResources = () => {
  const { adminOrg, getAdminOrgInfo } = useAdminOrg();
  const submitAttempt = useRef(false);
  const { user } = useAuth();
  const [state, setState] = useReducer(reducer, initialState);
  const {
    formData: {
      BENEFIT_CALCULATOR,
      BUDGET_PLANNER,
      BUDGET_PLANNER_PDF,
      DEBT_ADVICE,
      EMPLOYMENT_SERVICES,
      GRANT_SEARCH,
      MENTAL_HEALTH_1,
      MENTAL_HEALTH_2,
      MENTAL_HEALTH_3,
      STILL_NEED_HELP,
    },
    loading,
    validationErrs,
    httpError,
    isModalVisible,
  } = state;

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  const setFormData = (value, key, type) =>
    setState((prevState) => {
      const updatedResource = { ...prevState.formData[key] };
      updatedResource[type] = value;

      return {
        formData: { ...prevState.formData, [key]: updatedResource },
      };
    });

  const validateForm = () => {
    try {
      validate({
        ...state.formData,
      });
      setState({ validationErrs: { hasError: false } });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({
          validationErrs: { ...error.inner, hasError: true },
        });
      }
      return false;
    }
  };

  useEffect(() => {
    if (adminOrg.id) {
      const resources = adminOrg?.resources?.reduce((acc, curr) => {
        acc[curr.key] = curr;
        return acc;
      }, {});

      setState({ formData: resources });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminOrg.id, adminOrg?.resources]);

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    BENEFIT_CALCULATOR,
    BUDGET_PLANNER,
    BUDGET_PLANNER_PDF,
    DEBT_ADVICE,
    EMPLOYMENT_SERVICES,
    GRANT_SEARCH,
    MENTAL_HEALTH_1,
    MENTAL_HEALTH_2,
    MENTAL_HEALTH_3,
    STILL_NEED_HELP,
  ]);

  const handleUpdate = async () => {
    setState({ loading: true });
    const { error } = await Organisations.updateOrganisationResources({
      id: user.organisationId,
      resources: Object.values(state.formData).filter((resource) => {
        const defaultResource = defaultResourcesObj[resource.key];
        return (
          resource.value !== defaultResource.value ||
          resource.label !== defaultResource.label
        );
      }),
    });

    setState({ loading: false });
    if (error) {
      setState({
        httpError: error.message,
        validationErrs: { hasError: false },
      });
    } else {
      getAdminOrgInfo();
      setState({ isModalVisible: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      handleUpdate();
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb="6" weight="bold">
            Customise resources and phone numbers
          </T.H1>
        </Col>{' '}
        <Col w={[4, 12, 10]}>
          <T.P isSmall color="neutralDark" mb={6}>
            Below are the default resource links used in the app. You can type
            in your own ones below and click the reset icon to restore to
            default.{' '}
          </T.P>
        </Col>
      </Row>
      <S.Section bg="neutralSurface">
        <Col w={[4, 12, 12]} mb={4}>
          <S.SectionTitle weight="semi">Still need help</S.SectionTitle>
        </Col>
        <Col w={[4, 12, 6]}>
          <I.BasicInput
            label="Phone number"
            type="text"
            value={STILL_NEED_HELP?.value}
            helper="The default phone number is the number to the MoneyHelper.org.uk helpline, but if you prefer that your customers contact your organsation directly please add the relevant contact number here."
            handleChange={(value) =>
              setFormData(value, 'STILL_NEED_HELP', 'value')
            }
            resetValue={defaultResourcesObj.STILL_NEED_HELP.value}
            error={validationErrs?.STILL_NEED_HELP?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mtT={4}>
          <I.BasicInput
            label="Phone number label"
            type="text"
            helper="Enter your preferred label here"
            value={STILL_NEED_HELP?.label}
            handleChange={(value) =>
              setFormData(value, 'STILL_NEED_HELP', 'label')
            }
            resetValue={defaultResourcesObj.STILL_NEED_HELP.label}
            error={validationErrs?.STILL_NEED_HELP?.label}
          />
        </Col>
      </S.Section>

      <S.Section bg="secondaryLight">
        <Col w={[4, 12, 12]} mb={4}>
          <S.SectionTitle weight="semi">Benefit Calculator</S.SectionTitle>
        </Col>
        <Col w={[4, 12, 6]}>
          <I.BasicInput
            label="Benefit calculator link"
            type="text"
            value={BENEFIT_CALCULATOR?.value}
            helper="Enter your preferred benefit calculator here"
            handleChange={(value) =>
              setFormData(value, 'BENEFIT_CALCULATOR', 'value')
            }
            resetValue={defaultResourcesObj.BENEFIT_CALCULATOR.value}
            error={validationErrs?.BENEFIT_CALCULATOR?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mtT={4}>
          <I.BasicInput
            label="Benefit calculator button label"
            type="text"
            helper="Enter your preferred benefit calculator here"
            value={BENEFIT_CALCULATOR?.label}
            handleChange={(value) =>
              setFormData(value, 'BENEFIT_CALCULATOR', 'label')
            }
            resetValue={defaultResourcesObj.BENEFIT_CALCULATOR.label}
            error={validationErrs?.BENEFIT_CALCULATOR?.label}
          />
        </Col>
      </S.Section>

      <S.Section bg="neutralSurface">
        <Col w={[4, 12, 12]} mb={4}>
          <S.SectionTitle weight="semi">Debt advice</S.SectionTitle>
        </Col>
        <Col w={[4, 12, 6]}>
          <I.BasicInput
            label="Debt advice link"
            type="text"
            value={DEBT_ADVICE?.value}
            helper="Enter your preferred debt advice link here"
            handleChange={(value) => setFormData(value, 'DEBT_ADVICE', 'value')}
            resetValue={defaultResourcesObj.DEBT_ADVICE.value}
            error={validationErrs?.DEBT_ADVICE?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mtT={4}>
          <I.BasicInput
            label="Debt advice button label"
            type="text"
            helper="Enter your preferred button label here"
            value={DEBT_ADVICE?.label}
            handleChange={(value) => setFormData(value, 'DEBT_ADVICE', 'label')}
            resetValue={defaultResourcesObj.DEBT_ADVICE.label}
            error={validationErrs?.DEBT_ADVICE?.label}
          />
        </Col>
      </S.Section>

      <S.Section bg="secondaryLight">
        <Col w={[4, 12, 12]} mb={4}>
          <S.SectionTitle weight="semi">Budget</S.SectionTitle>
        </Col>
        <Col w={[4, 12, 6]}>
          <I.BasicInput
            label="Online budgeting tool link"
            type="text"
            value={BUDGET_PLANNER?.value}
            helper="Enter your preferred budgeting tool here"
            handleChange={(value) =>
              setFormData(value, 'BUDGET_PLANNER', 'value')
            }
            resetValue={defaultResourcesObj.BUDGET_PLANNER.value}
            error={validationErrs?.BUDGET_PLANNER?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mtT={4}>
          <I.BasicInput
            label="Online budgeting tool button label"
            type="text"
            helper="Enter your preferred button label here"
            value={BUDGET_PLANNER?.label}
            handleChange={(value) =>
              setFormData(value, 'BUDGET_PLANNER', 'label')
            }
            resetValue={defaultResourcesObj.BUDGET_PLANNER.label}
            error={validationErrs?.BUDGET_PLANNER?.label}
          />
        </Col>
        <Col w={[4, 12, 6]} mt={4}>
          <I.BasicInput
            label="Printable budgeting pdf link"
            type="text"
            value={BUDGET_PLANNER_PDF?.value}
            helper="Enter your preferred budgeting pdf here"
            handleChange={(value) =>
              setFormData(value, 'BUDGET_PLANNER_PDF', 'value')
            }
            resetValue={defaultResourcesObj.BUDGET_PLANNER_PDF.value}
            error={validationErrs?.BUDGET_PLANNER_PDF?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mt={4} mtT={4}>
          <I.BasicInput
            label="Printable budgeting pdf button label"
            type="text"
            helper="Enter your preferred button label here"
            value={BUDGET_PLANNER_PDF?.label}
            handleChange={(value) =>
              setFormData(value, 'BUDGET_PLANNER_PDF', 'label')
            }
            resetValue={defaultResourcesObj.BUDGET_PLANNER_PDF.label}
            error={validationErrs?.BUDGET_PLANNER_PDF?.label}
          />
        </Col>
      </S.Section>

      <S.Section bg="neutralSurface">
        <Col w={[4, 12, 12]} mb={4}>
          <S.SectionTitle weight="semi">Employment services</S.SectionTitle>
        </Col>
        <Col w={[4, 12, 6]}>
          <I.BasicInput
            label="Employment services link"
            type="text"
            value={EMPLOYMENT_SERVICES?.value}
            helper="Enter your preferred employment services link"
            handleChange={(value) =>
              setFormData(value, 'EMPLOYMENT_SERVICES', 'value')
            }
            resetValue={defaultResourcesObj.EMPLOYMENT_SERVICES.value}
            error={validationErrs?.EMPLOYMENT_SERVICES?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mtT={4}>
          <I.BasicInput
            label="Employment services button label"
            type="text"
            helper="Enter your preferred button label here"
            value={EMPLOYMENT_SERVICES?.label}
            handleChange={(value) =>
              setFormData(value, 'EMPLOYMENT_SERVICES', 'label')
            }
            resetValue={defaultResourcesObj.EMPLOYMENT_SERVICES.label}
            error={validationErrs?.EMPLOYMENT_SERVICES?.label}
          />
        </Col>
      </S.Section>

      <S.Section bg="secondaryLight">
        <Col w={[4, 12, 12]} mb={4}>
          <S.SectionTitle weight="semi">Grant search</S.SectionTitle>
        </Col>
        <Col w={[4, 12, 6]}>
          <I.BasicInput
            label="Grant search link"
            type="text"
            value={GRANT_SEARCH?.value}
            helper="Enter your preferred grant search link"
            handleChange={(value) =>
              setFormData(value, 'GRANT_SEARCH', 'value')
            }
            resetValue={defaultResourcesObj.GRANT_SEARCH.value}
            error={validationErrs?.GRANT_SEARCH?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mtT={4}>
          <I.BasicInput
            label="Grant search button label"
            type="text"
            helper="Enter your preferred grant search label here"
            value={GRANT_SEARCH?.label}
            handleChange={(value) =>
              setFormData(value, 'GRANT_SEARCH', 'label')
            }
            resetValue={defaultResourcesObj.GRANT_SEARCH.label}
            error={validationErrs?.GRANT_SEARCH?.label}
          />
        </Col>
      </S.Section>

      <S.Section bg="neutralSurface">
        <Col w={[4, 12, 12]} mb={4}>
          <S.SectionTitle weight="semi">Mental health</S.SectionTitle>
        </Col>
        <Col w={[4, 12, 6]}>
          <I.BasicInput
            label="Mental health link"
            type="text"
            value={MENTAL_HEALTH_1?.value}
            helper="Enter your preferred mental health link here"
            handleChange={(value) =>
              setFormData(value, 'MENTAL_HEALTH_1', 'value')
            }
            resetValue={defaultResourcesObj.MENTAL_HEALTH_1.value}
            error={validationErrs?.MENTAL_HEALTH_1?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mtT={4}>
          <I.BasicInput
            label="Mental health button label"
            type="text"
            helper="Enter your preferred button label here"
            value={MENTAL_HEALTH_1?.label}
            handleChange={(value) =>
              setFormData(value, 'MENTAL_HEALTH_1', 'label')
            }
            resetValue={defaultResourcesObj.MENTAL_HEALTH_1.label}
            error={validationErrs?.MENTAL_HEALTH_1?.label}
          />
        </Col>
        <Col w={[4, 12, 6]} mt={4}>
          <I.BasicInput
            label="Mental health link 2"
            type="text"
            value={MENTAL_HEALTH_2?.value}
            helper="Enter your preferred mental health link here"
            handleChange={(value) =>
              setFormData(value, 'MENTAL_HEALTH_2', 'value')
            }
            resetValue={defaultResourcesObj.MENTAL_HEALTH_2.value}
            error={validationErrs?.MENTAL_HEALTH_2?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mt={4} mtT={4}>
          <I.BasicInput
            label="Mental health button label 2"
            type="text"
            helper="Enter your preferred button label here"
            value={MENTAL_HEALTH_2?.label}
            handleChange={(value) =>
              setFormData(value, 'MENTAL_HEALTH_2', 'label')
            }
            resetValue={defaultResourcesObj.MENTAL_HEALTH_2.label}
            error={validationErrs?.MENTAL_HEALTH_2?.label}
          />
        </Col>

        <Col w={[4, 12, 6]} mt={4}>
          <I.BasicInput
            label="Mental health link 3"
            type="text"
            value={MENTAL_HEALTH_3?.value}
            helper="Enter your preferred mental health link here"
            handleChange={(value) =>
              setFormData(value, 'MENTAL_HEALTH_3', 'value')
            }
            resetValue={defaultResourcesObj.MENTAL_HEALTH_3.value}
            error={validationErrs?.MENTAL_HEALTH_3?.value}
          />
        </Col>
        <Col w={[4, 12, 6]} mt={4} mtT={4}>
          <I.BasicInput
            label="Mental health button label 3"
            type="text"
            helper="Enter your preferred button label here"
            value={MENTAL_HEALTH_3?.label}
            handleChange={(value) =>
              setFormData(value, 'MENTAL_HEALTH_3', 'label')
            }
            resetValue={defaultResourcesObj.MENTAL_HEALTH_3.label}
            error={validationErrs?.MENTAL_HEALTH_3?.label}
          />
        </Col>
      </S.Section>
      <Row mt={7} style={{ flex: Number(isMobile), alignItems: 'flex-end' }}>
        {httpError && (
          <Col w={[4, 12, 12]}>
            <T.P mb={2} color="error">
              {httpError}
            </T.P>
          </Col>
        )}
        {validationErrs?.hasError ? (
          <Col w={[4, 12, 12]}>
            <T.P mb="2" color="error">
              At least one of the input fields has not been filled in or details
              entered incorrectly. Please check the form above for more details.
            </T.P>
          </Col>
        ) : null}
        <Col w={[4, 12, 6]}>
          <Button
            variant="primary"
            disabled={false}
            loading={loading}
            text="Save changes"
            type="submit"
          />
        </Col>
      </Row>

      <Modal
        visible={isModalVisible}
        setIsModalVisible={(e) => setState({ isModalVisible: e })}
        type={'updateSuccess'}
        title={'Updated'}
        description={'Changes successfully updated'}
        btnText="Okay"
      />
    </S.Form>
  );
};

export default CustomiseResources;
