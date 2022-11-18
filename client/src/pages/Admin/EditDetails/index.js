import { useReducer, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Modal,
} from '../../../components';
import * as S from './style';
import { editDetails as validate } from '../../../validation/schemas';
import { Organisations } from '../../../api-calls';
import { useLang } from '../../../context/lang';
import { useAdminOrg } from '../../../context/admin-org';
import { useAuth } from '../../../context/auth';
import { t } from '../../../helpers';

const { Row, Col } = Grid;

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    organisationName: '',
    uniqueSlug: '',
  },
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

const EditDetails = () => {
  const { lang } = useLang();
  const { adminOrg, getAdminOrgInfo } = useAdminOrg();
  const submitAttempt = useRef(false);
  const { user, setUser } = useAuth();
  const [state, setState] = useReducer(reducer, initialState);
  const {
    formData: { firstName, lastName, email, organisationName, uniqueSlug },
    loading,
    validationErrs,
    httpError,
    isModalVisible,
  } = state;

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  const setFormData = (data) =>
    setState((prevState) => ({ formData: { ...prevState.formData, ...data } }));

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
      setFormData({
        organisationName: adminOrg.organisationName,
        uniqueSlug: adminOrg.uniqueSlug,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminOrg.id]);

  useEffect(() => {
    if (user.id) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstName, lastName, email, organisationName, uniqueSlug]);

  const handleUpdate = async () => {
    setState({ loading: true });
    const { error } = await Organisations.updateOrganisation({
      id: user.organisationId,
      withUserDetails: true,
      body: {
        ...state.formData,
      },
    });

    setState({ loading: false });
    if (error) {
      if (error.statusCode === 409) {
        setState({
          validationErrs: {
            [error.data.field]: error.message,
            hasError: true,
          },
          httpError: error.message,
        });
      } else {
        setState({
          httpError: error.message,
          validationErrs: { hasError: false },
        });
      }
    } else {
      getAdminOrgInfo();
      setUser({ ...user, firstName, lastName, email });
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

  const handleUniqueLink = (value) => {
    const uniqueSlug = value.trimStart().replace(' ', '-').toLowerCase();
    setFormData({ uniqueSlug });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb="6" weight="bold">
            {t('editDetails.title', lang)}
          </T.H1>
        </Col>{' '}
        <Col w={[4, 12, 6]}>
          <T.P isSmall color="neutralDark" mt={4}>
            {t('editDetails.subtitle', lang)}
          </T.P>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 4]} mt={6}>
          <I.BasicInput
            label="First name"
            type="text"
            placeholder="Type first name here..."
            value={firstName}
            handleChange={(firstName) => setFormData({ firstName })}
            error={validationErrs?.firstName}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={6}>
          <I.BasicInput
            label="Last name"
            type="text"
            placeholder="Type last name here..."
            value={lastName}
            handleChange={(lastName) => setFormData({ lastName })}
            error={validationErrs?.lastName}
          />
        </Col>
      </Row>
      <Row mt={6}>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.BasicInput
            label="Email"
            type="email"
            placeholder="Type email here..."
            value={email}
            handleChange={(email) => setFormData({ email })}
            error={validationErrs?.email}
          />
        </Col>
      </Row>
      <Row mt={6}>
        <Col w={[4, 6, 4]}>
          <I.BasicInput
            label="Organisation"
            type="text"
            placeholder="Type organisation name..."
            value={organisationName}
            handleChange={(organisationName) =>
              setFormData({ organisationName })
            }
            error={validationErrs?.organisationName}
          />
        </Col>
      </Row>

      <Row mt={7}>
        <Col w={[4, 12, 4]}>
          <T.H2 mb={5} weight="bold">
            {t('yourUniqueLink', lang)}
          </T.H2>
        </Col>
      </Row>
      <Row mb={2}>
        <Col w={[4, 6, 4]}>
          <T.H3>
            {window.location.origin}/{uniqueSlug}
          </T.H3>
        </Col>
      </Row>
      <Row mb={6}>
        <Col w={[4, 6, 4]}>
          <I.BasicInput
            value={uniqueSlug}
            handleChange={handleUniqueLink}
            error={validationErrs?.uniqueSlug}
          />
        </Col>
      </Row>

      <Row mt={6}>
        <Col w={[4, 6, 4]}>
          <T.H2 mb={5} weight="bold">
            {t('contact.title', lang)}
          </T.H2>
        </Col>
      </Row>

      <Row mt={7} style={{ flex: Number(isMobile), alignItems: 'flex-end' }}>
        <Col w={[4, 6, 4]} style={{ alignItems: 'flex-end' }}>
          {httpError && (
            <T.P mb={2} color="error">
              {httpError}
            </T.P>
          )}
          {validationErrs?.hasError?.length ? (
            <Col w={[4, 12, 12]}>
              <T.P mb="2" color="error">
                At least one of the input fields has not been filled in or
                details entered incorrectly. Please check the form above for
                more details.
              </T.P>
            </Col>
          ) : null}

          <Button
            variant="primary"
            disabled={false}
            loading={loading}
            text="Save changes"
            type="submit"
          />
        </Col>
      </Row>

      <Row mt={7}>
        <Col w={[4, 6, 6]}>
          <T.P isSmall color="neutralDark">
            {t('accountDelete', lang)}{' '}
            <T.Link
              to="mailto:ucdigital@hyde-housing.co.uk"
              color="neutralDark"
              weight="bold"
              underline
              external
            >
              {t('hydeHousing', lang)}
            </T.Link>
          </T.P>
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

export default EditDetails;
