import { useReducer, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

import { Grid, Typography as T, Inputs as I, Button } from '../../components';
import * as S from './style';
import validate from '../../validation/schemas/reset-password';
import { Users } from '../../api-calls';

import { navRoutes as R } from '../../constants';
const { Row, Col } = Grid;

const initialState = {
  password: '',
  httpError: '',
  validationErrs: {},
  loading: false,
  showPasswordInput: true,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}

const ResetPassword = () => {
  const submitAttempt = useRef(false);
  const { token } = useParams();
  const [state, setState] = useReducer(reducer, initialState);
  const { password, loading, validationErrs, httpError, showPasswordInput } =
    state;

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  const validateForm = () => {
    try {
      validate({
        password,
      });
      setState({ validationErrs: {} });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({ validationErrs: error.inner, loading: false });
      }
      return false;
    }
  };

  const handleResetPassword = async () => {
    const { error } = await Users.updatePassword({
      password,
      token,
    });

    setState({ loading: false });
    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { email: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      // after that the user should show the success message
      setState({ showPasswordInput: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ loading: true });
    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      handleResetPassword();
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      {showPasswordInput ? (
        <>
          <T.H1>Reset Password</T.H1>
          <Row mt="6" inner>
            <Col w={[4, 11, 6]}>
              <T.P color="neutralDark">Please enter a new password</T.P>
            </Col>
          </Row>
          <Row mt="6" inner>
            <Col w={[4, 11, 6]}>
              <I.BasicInput
                label="Password"
                placeholder="Type your password..."
                margins={{ mt: '2', mb: '1' }}
                type="password"
                value={password}
                handleChange={(input) => setState({ password: input })}
                error={validationErrs.password}
              />
            </Col>
          </Row>
          <Row
            inner
            mt="6"
            style={{ flex: isMobile ? 1 : 0, alignItems: 'flex-end' }}
          >
            <Col w={[4, 11, 6]} style={{ alignItems: 'flex-end' }}>
              <div style={{ width: '100%' }}>
                <Button
                  variant="primary"
                  disabled={false}
                  loading={loading}
                  text="Submit"
                  type="submit"
                />
                {httpError && (
                  <T.P mt="4" ml="2" color="error">
                    {httpError}
                  </T.P>
                )}
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <T.H1>Password reset</T.H1>

          <Row mt="5" inner>
            <Col w={[4, 12, 12]}>
              <T.P color="neutralDark">
                Great, you’ve set up a new password!
              </T.P>
            </Col>
          </Row>
          <Row
            inner
            mt="22px"
            style={{ flex: isMobile ? 1 : 0, alignItems: 'flex-end' }}
          >
            <Col w={[4, 11, 6]} style={{ alignItems: 'flex-end' }}>
              <Button
                variant="primary"
                disabled={false}
                to={R.ADMIN.LOGIN}
                text="Return to log in"
                type="button"
              />
            </Col>
          </Row>
        </>
      )}
    </S.Form>
  );
};

export default ResetPassword;
