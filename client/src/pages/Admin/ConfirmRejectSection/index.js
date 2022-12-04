import { useReducer, useEffect, useRef } from 'react';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Modal,
} from '../../../components';
import * as S from './style';
import { rejectOrganisation as validate } from '../../../validation/schemas';
import { Sections } from '../../../api-calls';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { navRoutes } from '../../../constants';

const { Row, Col } = Grid;

const initialState = {
  formData: {
    explanation: '',
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

const ConfirmRejectSection = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    formData: { explanation },
    loading,
    validationErrs,
    httpError,
    isModalVisible,
  } = state;
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const urlQuery = new URLSearchParams(location.search);
  const organisationId = urlQuery.get('organisationId');

  const setFormData = (data) =>
    setState((prevState) => ({ formData: { ...prevState.formData, ...data } }));

  const validateForm = () => {
    try {
      validate({
        ...state.formData,
      });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({
          validationErrs: { ...error.inner },
        });
      }
      return false;
    }
  };

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [explanation]);

  const handleReject = async () => {
    setState({ loading: true });
    const { error } = await Sections.updateSectionStatus({
      id,
      status: 'REJECTED',
      explanation,
      organisationId,
    });

    setState({ loading: false });
    if (error) {
      setState({
        httpError: error.message,
      });
    } else {
      setState({ isModalVisible: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      handleReject();
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb="42px" weight="bold">
            Confirm rejection
          </T.H1>
        </Col>{' '}
        <Col w={[4, 12, 6]}>
          <T.P isSmall color="neutralDark">
            Are you sure you wish to reject this section? If so, please write
            your feedback below that will be emailed to them and click confirm.
          </T.P>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 6]} mt={'20px'}>
          <I.Textarea
            label="Explanation"
            rows="4"
            placeholder="Type explanation here..."
            value={explanation}
            handleChange={(explanation) => setFormData({ explanation })}
            error={validationErrs?.explanation}
          />
        </Col>
      </Row>

      <Row mt={'42px'}>
        <Col w={[4, 6, 6]} style={{ alignItems: 'flex-end' }}>
          {httpError && (
            <T.P mb={2} color="error">
              {httpError}
            </T.P>
          )}

          <Button
            variant="primary"
            disabled={false}
            loading={loading}
            text="Confirm"
            type="submit"
          />
        </Col>
      </Row>

      <Modal
        visible={isModalVisible}
        setIsModalVisible={(e) => setState({ isModalVisible: e })}
        parentFunc={() => navigate(navRoutes.SUPER_ADMIN.CONTENT_REVIEW)}
        type={'updateSuccess'}
        title={'Organisation rejected'}
        description={
          'Thanks for reviewing this content. We will let the organisation know that their content has been rejected.'
        }
        btnText="Return to content review"
      />
    </S.Form>
  );
};

export default ConfirmRejectSection;
