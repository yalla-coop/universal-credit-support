import { useReducer, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';
import { useAdminOrg } from '../../../context/admin-org';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
} from '../../../components';
import * as S from './style';
import { createOrganisationDetails as validate } from '../../../validation/schemas';
import { Organisations } from '../../../api-calls';

import { navRoutes as R } from '../../../constants';
import { useAuth } from '../../../context/auth';
import SecondStep from './SecondStep';

const { Row, Col } = Grid;

const initialState = {
  httpError: '',
  validationErrs: {},
  loading: false,
};

function reducer(state, newState) {
  let value = newState;
  if (typeof newState === 'function') {
    value = newState(state);
  }

  return { ...state, ...value };
}

const CreateOrganisationDetails = () => {
  const { user } = useAuth();
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const { loading, validationErrs, httpError } = state;
  const { getAdminOrgInfo } = useAdminOrg();

  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateForm = () => {
    try {
      validate({});
      setState({ validationErrs: {} });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({ validationErrs: { ...error.inner } });
      }
      return false;
    }
  };

  const handleUpdate = async () => {
    setState({ loading: true });
    const { error } = await Organisations.updateOrganisation({
      id: user.organisationId,
      body: {},
    });

    setState({ loading: false });
    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { email: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      getAdminOrgInfo();
      navigate(R.ADMIN.CREATE_ORG_DETAILS_SECOND_STEP);
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
        <Col w={[4, 12, 8]}>
          <T.H1 weight="bold">Welcome!</T.H1>
          <T.P color="neutralDark" mt="4" mb="6">
            We will now take you through a few simple steps to customise the UC
            Helper. You will be able to add your organsation's logo, contact
            details, and your preferred benefit checker. It is fine to skip any
            step if you prefer not to add your own information. You can change
            any of the information you add at any point in time.
          </T.P>
        </Col>{' '}
        <Col w={[4, 11, 6]}>
          <T.H2>Contact Details</T.H2>
          <T.P isSmall color="neutralDark" mt="4">
            If you want customers to be able to contact you if they need further
            help when using the UC helper please add the relevant phone number,
            email address or webchat link below.
          </T.P>
          <T.P isSmall color="neutralDark" mt="4">
            If you leave this blank your customers will be directed to the
            government UC helpline if they need help with their claim.
          </T.P>
        </Col>
      </Row>

      <Row
        mt="7"
        mtT="6"
        style={{ flex: Number(isMobile), alignItems: 'flex-end' }}
      >
        <Col w={[4, 11, 6]} style={{ alignItems: 'flex-end' }}>
          {httpError && (
            <T.P mb="2" color="error">
              {httpError}
            </T.P>
          )}
          <Button
            variant="primary"
            disabled={false}
            loading={loading}
            text="Next"
            type="submit"
          />
        </Col>
      </Row>
    </S.Form>
  );
};

export { SecondStep };
export default CreateOrganisationDetails;
