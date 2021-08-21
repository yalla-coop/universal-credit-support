import { useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography as T, Inputs as I } from '../../components';
import validate from '../../validation/schemas/login';
import { Users } from '../../api-calls';

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
    const { data, error } = await Users.login({
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
    }
  };

  return (
    <>
      <T.H1 weight="bold">Log in</T.H1>
      <Row>
        <Col w={[4, 11, 6]}>
          {' '}
          <I.BasicInput
            label="Email"
            placeholder=""
            margins={{ mt: '2', mb: '1' }}
            type="email"
            value={email}
            autoFocus
            handleChange={(e) => setState({ email: e.target.value })}
            error={validationErrs.email}
          />
        </Col>
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="Password"
            placeholder=""
            margins={{ mt: '2', mb: '1' }}
            type="password"
            value={password}
            handleChange={(e) => setState({ password: e.target.value })}
            error={validationErrs.password}
          />
        </Col>
      </Row>
    </>
  );
};

export default Login;
