import { useReducer, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';
import { useParams } from 'react-router-dom';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Modal,
} from '../../../components';
import * as S from './style';
import { EditOrganisation as validate } from '../../../validation/schemas';
import { Organisations, Users } from '../../../api-calls';
import { useAuth } from '../../../context/auth';
import { types } from '../../../constants';

const { Row, Col } = Grid;

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    backupEmail: '',
    organisationName: '',
    typeOfOrganisation: '',
    uniqueSlug: '',
    organisationId: null,
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

const EditOrganisation = () => {
  const { id } = useParams();

  const submitAttempt = useRef(false);
  const { user } = useAuth();
  const [state, setState] = useReducer(reducer, initialState);
  const {
    formData: {
      firstName,
      lastName,
      email,
      backupEmail,
      organisationName,
      typeOfOrganisation,
      uniqueSlug,
      organisationId,
    },
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
    const getUserInfo = async () => {
      try {
        const { data, error } = await Users.getUserById({
          id,
          withOrgDetails: true,
        });
        if (error) {
          throw new Error(error);
        }
        setFormData(data);
      } catch (error) {
        setState({ httpError: error.message });
      }
    };
    if (user.id) {
      getUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
    organisationName,
    typeOfOrganisation,
    uniqueSlug,
  ]);

  const handleUpdate = async () => {
    setState({
      loading: true,
      validationErrs: { hasError: false },
      httpError: '',
    });
    const { error } = await Organisations.updateOrganisation({
      id: organisationId,
      withUserDetails: true,
      body: {
        ...state.formData,
        userId: id,
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
            Organisation details
          </T.H1>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 6]} mt={6}>
          <I.BasicInput
            label="First name"
            type="text"
            placeholder="Type first name here..."
            value={firstName}
            handleChange={(firstName) => setFormData({ firstName })}
            error={validationErrs?.firstName}
          />
        </Col>
        <Col w={[4, 6, 6]} mt={6}>
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
        <Col w={[4, 6, 6]} mt={isMobile ? 6 : 0}>
          <I.BasicInput
            label="Email"
            type="email"
            placeholder="Type email here..."
            value={email}
            handleChange={(email) => setFormData({ email })}
            error={validationErrs?.email}
          />
        </Col>
        <Col w={[4, 6, 6]} mt={isMobile ? 6 : 0}>
          <I.BasicInput
            label="Back up email address"
            type="email"
            placeholder="Type email here..."
            value={backupEmail}
            handleChange={(backupEmail) => setFormData({ backupEmail })}
            error={validationErrs?.backupEmail}
          />
        </Col>
      </Row>
      <Row mt={6}>
        <Col w={[4, 6, 6]}>
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
        <Col w={[4, 6, 6]}>
          <I.Dropdown
            label="Type of organisation"
            placeholder="Select organisation..."
            margins={{ mt: '2', mb: '1' }}
            name="typeOfOrganisation"
            allowClear={false}
            selected={typeOfOrganisation}
            options={Object.values(types.organisationTypes).map((e) => ({
              label: e,
              value: e,
            }))}
            handleChange={(input) => setFormData({ typeOfOrganisation: input })}
            error={validationErrs.typeOfOrganisation}
          />
        </Col>
      </Row>

      <Row mt={6}>
        <Col w={[4, 12, 6]}>
          <T.H2 mb={5} weight="semi">
            Organisation unique link
          </T.H2>
        </Col>
      </Row>
      <Row mb={2}>
        <Col w={[4, 6, 6]}>
          <T.H3>
            {window.location.origin}/{uniqueSlug}
          </T.H3>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 6]}>
          <I.BasicInput
            value={uniqueSlug}
            handleChange={handleUniqueLink}
            error={validationErrs?.uniqueSlug}
          />
        </Col>
      </Row>

      <Row mt={7} style={{ flex: Number(isMobile), alignItems: 'flex-end' }}>
        <Col w={[4, 6, 6]} style={{ alignItems: 'flex-end' }}>
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

export default EditOrganisation;
