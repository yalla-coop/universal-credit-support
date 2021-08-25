import { useReducer, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Typography,
} from '../../components';
import * as S from './style';
import validate from '../../validation/schemas/forgot-password';
import { Users } from '../../api-calls';

import { navRoutes as R } from '../../constants';
const { Row, Col } = Grid;

const initialState = {
  email: '',
  httpError: '',
  validationErrs: {},
  loading: false,
  showEmailInput: true,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}
const cleanEmail = (email) => email.toLowerCase().trim();

const ForgotPassword = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const { email, loading, validationErrs, httpError, showEmailInput } = state;

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const validateForm = () => {
    try {
      validate({
        email: cleanEmail(email),
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

  const handleForgotPassword = async () => {
    const { error } = await Users.resetPasswordLink({
      email: cleanEmail(email),
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
      setState({ showEmailInput: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ loading: true });
    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      handleForgotPassword();
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <T.H1 weight="bold">Reset Password</T.H1>
      {showEmailInput ? (
        <>
          <Row mt="6">
            <Col w={[4, 11, 6]}>
              <Typography.P>
                Enter the email address associated with your account and we will
                send you a link to reset your password. Please remember to check
                your email junk folder.
              </Typography.P>
            </Col>
          </Row>
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
                text="Submit"
                type="submit"
              />
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row mt="6">
            <Col w={[4, 11, 6]}>
              <Typography.P>
                A password reset link with instructions has been emailed to you.
                Please make sure you check your ‘junk’ folder.
              </Typography.P>
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

export default ForgotPassword;
