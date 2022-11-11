import { useReducer, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Cards,
  Icon,
} from '../../components';
import * as S from './style';
import { useAuth } from './../../context/auth';
import validate from '../../validation/schemas/signup';
import { Users } from '../../api-calls';

import { navRoutes as R, types } from '../../constants';

const { Row, Col } = Grid;

const PasswordTipsContent = (
  <div>
    <T.H3 color="neutralMain">A password must contain:</T.H3>
    <T.H3 weight="400" color="neutralMain">
      - a minimum of 8 characters
    </T.H3>
    <T.H3 weight="400" color="neutralMain">
      - one capital letter
    </T.H3>
    <T.H3 weight="400" color="neutralMain">
      - one lowercase letter
    </T.H3>
    <T.H3 weight="400" color="neutralMain">
      - one number
    </T.H3>
    <T.H3 weight="400" color="neutralMain">
      - one non alphabetical or numeric character
    </T.H3>
  </div>
);
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  backupEmail: '',
  password: '',
  organisationName: '',
  typeOfOrganisation: '',
  agreedOnTerms: false,
  httpError: '',
  validationErrs: {},
  loading: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}
const cleanEmail = (email) => email.toLowerCase().trim();

const SignUp = () => {
  const submitAttempt = useRef(false);
  const [passwordTipVisible, setPasswordTipVisible] = useState(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    firstName,
    lastName,
    email,
    backupEmail,
    password,
    organisationName,
    typeOfOrganisation,
    agreedOnTerms,
    loading,
    validationErrs,
    httpError,
  } = state;
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    firstName,
    lastName,
    email,
    backupEmail,
    password,
    organisationName,
    typeOfOrganisation,
    agreedOnTerms,
  ]);

  const validateForm = () => {
    try {
      validate({
        email: cleanEmail(email),
        firstName,
        lastName,
        backupEmail,
        password,
        organisationName,
        typeOfOrganisation,
        agreedOnTerms,
      });
      setState({ validationErrs: {} });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({ validationErrs: error.inner });
      }
      return false;
    }
  };

  const handleSignup = async () => {
    setState({ loading: true });
    const { error, data } = await Users.signup({
      email: cleanEmail(email),
      firstName,
      lastName,
      backupEmail,
      password,
      organisationName,
      typeOfOrganisation,
      agreedOnTerms,
    });

    setState({ loading: false });

    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { [error.data.field]: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      setUser(data);
      navigate(R.ADMIN.CREATE_ORG_DETAILS_FIRST_STEP);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      handleSignup();
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <T.H1 weight="bold">Sign up</T.H1>
      <Row mt="7">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="First name"
            placeholder="Type your first name..."
            margins={{ mt: '2', mb: '1' }}
            value={firstName}
            name="firstName"
            autoFocus
            handleChange={(value) => setState({ firstName: value })}
            error={validationErrs.firstName}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="Last name"
            placeholder="Type your last name..."
            margins={{ mt: '2', mb: '1' }}
            value={lastName}
            name="lastName"
            handleChange={(value) => setState({ lastName: value })}
            error={validationErrs.lastName}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="Email address"
            placeholder="Type your email..."
            margins={{ mt: '2', mb: '1' }}
            type="email"
            name="email"
            value={email}
            handleChange={(input) => setState({ email: input })}
            error={validationErrs.email}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="Back up email address"
            placeholder="Type your backup email..."
            margins={{ mt: '2', mb: '1' }}
            type="email"
            name="backupEmail"
            value={backupEmail}
            handleChange={(input) => setState({ backupEmail: input })}
            error={validationErrs.backupEmail}
            helper="Enter a back up email address that can be used to recover your organisation's information"
          />
        </Col>
      </Row>
      <Row mt="7" mtT="6">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label={
              <div style={{ display: 'flex' }}>
                Password{' '}
                <Icon
                  ml="3"
                  width="16"
                  height="16"
                  color="secondaryMain"
                  icon="question"
                  onClick={() => setPasswordTipVisible((_) => !_)}
                />
              </div>
            }
            placeholder="Type your password..."
            margins={{ mt: '2', mb: '1' }}
            type="password"
            value={password}
            handleChange={(input) => setState({ password: input })}
            error={validationErrs.password}
          />

          {passwordTipVisible && (
            <Cards.Tips mt={4} tips={[PasswordTipsContent]} />
          )}
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="Organisation"
            placeholder="Type your organisation name..."
            margins={{ mt: '2', mb: '1' }}
            name="organisationName"
            value={organisationName}
            handleChange={(input) => setState({ organisationName: input })}
            error={validationErrs.organisationName}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 11, 6]}>
          <I.Dropdown
            label="Type of organisation"
            placeholder="Select organisation..."
            margins={{ mt: '2', mb: '1' }}
            name="typeOfOrganisation"
            selected={typeOfOrganisation}
            options={Object.values(types.organisationTypes).map((e) => ({
              label: e,
              value: e,
            }))}
            handleChange={(input) => setState({ typeOfOrganisation: input })}
            error={validationErrs.typeOfOrganisation}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 11, 6]}>
          <I.Checkbox
            checked={agreedOnTerms}
            handleChange={(v) => setState({ agreedOnTerms: v })}
            label={
              <T.P weight={'semi'}>
                I agree to the{' '}
                <T.Link
                  external
                  underline
                  color="neutralMain"
                  weight="semi"
                  to={R.EXTERNAL.TERMS_OF_USE}
                >
                  Terms of use
                </T.Link>
              </T.P>
            }
            error={validationErrs.agreedOnTerms}
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
            loading={loading}
            text="Sign up"
            type="submit"
          />
        </Col>
      </Row>
    </S.Form>
  );
};

export default SignUp;
