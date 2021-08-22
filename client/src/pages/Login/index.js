import { useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  TextWithIcon,
} from '../../components';
import * as S from './style';
import validate from '../../validation/schemas/login';
import { Users } from '../../api-calls';

import { navRoutes as R } from '../../constants';
const { Row, Col } = Grid;

const initialState = {
  email: '',
  password: '',
  httpError: '',
  validationErrs: {},
  submitAttempt: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}
const cleanEmail = (email) => email.toLowerCase().trim();

const Login = () => {
  const [state, setState] = useReducer(reducer, initialState);
  const { email, password, validationErrs, httpError, submitAttempt } = state;
  const history = useHistory();
  useEffect(() => {
    if (submitAttempt) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const validateForm = () => {
    try {
      validate({
        email: cleanEmail(email),
        password,
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

  const handleLogin = async () => {
    const { error } = await Users.login({
      email: cleanEmail(email),
      password,
    });

    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { email: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      // after that the user should be directed to its dashboard
      history.push(R.ADMIN.HOME);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ submitAttempt: true });

    const isValid = validateForm();
    if (isValid) {
      handleLogin();
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <T.H1 weight="bold">Log in</T.H1>
      <Row mt="7">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="Email address"
            placeholder="Type your email..."
            margins={{ mt: '2', mb: '1' }}
            type="email"
            value={email}
            autoFocus
            handleChange={(input) => setState({ email: input })}
            error={validationErrs.email}
          />
        </Col>
      </Row>
      <Row mt="7" mtT="6">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="Password"
            placeholder="Type your password..."
            margins={{ mt: '2', mb: '1' }}
            type="password"
            showForgetPassword
            value={password}
            handleChange={(input) => setState({ password: input })}
            error={validationErrs.password}
          />
        </Col>
      </Row>
      <Row mt="7" mtT="6" style={{ flex: 1, alignItems: 'flex-end' }}>
        {httpError && (
          <Col w={[4, 12, 12]}>
            <T.P mb="2" color="error">
              {httpError}
            </T.P>
          </Col>
        )}
        <Col w={[4, 11, 6]} style={{ alignItems: 'flex-end' }}>
          <Button
            variant="primary"
            disabled={false}
            loading={false}
            text="Login"
            type="submit"
          />
        </Col>
      </Row>
      <Row mt="6">
        <Col w={[4, 11, 6]}>
          <TextWithIcon
            to={R.ADMIN.SIGNUP}
            text="Don’t have an account? Sign up"
            icon="forwardArrow"
            iconColor="primaryMain"
          />
        </Col>
      </Row>
    </S.Form>
  );
};

export default Login;
