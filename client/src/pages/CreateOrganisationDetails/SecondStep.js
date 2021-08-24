import { useReducer, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

import { Grid, Typography as T, Inputs as I, Button } from '../../components';
import * as S from './style';
import { createOrganisationDetails as validate } from '../../validation/schemas';
import { Organisations } from '../../api-calls';

import { navRoutes as R } from '../../constants';
import { useAuth } from '../../context/auth';

const { Row, Col } = Grid;

const initialState = {
  mainColor: '',
  secondaryColor: '',
  neutralColor: '',
  httpError: '',
  validationErrs: {},
  loading: false,
  displayColorPicker: false,
};

function reducer(state, newState) {
  let value = newState;
  if (typeof newState === 'function') {
    value = newState(state);
  }

  return { ...state, ...value };
}

const SecondStep = () => {
  const { user } = useAuth();
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    mainColor,
    secondaryColor,
    neutralColor,
    loading,
    validationErrs,
    httpError,
  } = state;

  const history = useHistory();

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainColor, secondaryColor, neutralColor]);

  const validateForm = () => {
    try {
      validate({
        secondStep: true,
        mainColor,
        secondaryColor,
        neutralColor,
      });
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
      id: 1,
      body: {
        colors: {
          main: mainColor,
          secondary: secondaryColor,
          neutral: neutralColor,
        },
      },
    });

    setState({ loading: false });
    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { email: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      // after that the user should be directed to its dashboard
      history.push(R.ADMIN.CREATE_UNIQUE_LINK);
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
      <T.H1 weight="bold">Let’s customise!</T.H1>
      <T.Link
        color="neutralPrimaryMVP"
        underline
        mt="3"
        to={R.ADMIN.CREATE_UNIQUE_LINK}
      >
        Skip for now
      </T.Link>
      <Row mt="6">
        <Col w={[4, 11, 6]}>
          <T.H2>Colours</T.H2>
          <T.P isSmall color="neutralDark" mt="4">
            You can customise your tool’s colours to fit your brand. If you’re
            not sure of your brand colour hex codes, your Communications teams
            should help you with this.
          </T.P>
        </Col>
      </Row>

      <Row mt="6">
        <Col w={[4, 11, 6]}>
          <I.ColorPicker
            color={mainColor}
            onChange={(v) => setState({ mainColor: v })}
            label="Main colour"
            optional
            error={validationErrs.mainColor}
          />
        </Col>
      </Row>

      <Row mt="6">
        <Col w={[4, 11, 6]}>
          <I.ColorPicker
            color={secondaryColor}
            onChange={(v) => setState({ secondaryColor: v })}
            label="Secondary colour"
            optional
            error={validationErrs.secondaryColor}
          />
        </Col>
      </Row>
      <Row mt="6">
        <Col w={[4, 11, 6]}>
          <I.ColorPicker
            color={neutralColor}
            onChange={(v) => setState({ neutralColor: v })}
            label="Neutral colour"
            optional
            error={validationErrs.neutralColor}
          />
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

export default SecondStep;
