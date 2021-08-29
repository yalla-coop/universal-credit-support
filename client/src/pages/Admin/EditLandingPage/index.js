import { useReducer, useEffect, useRef, useState } from 'react';

import {
  Typography as T,
  Grid,
  Inputs,
  Button,
  Modal,
} from '../../../components';
import { LandingPage } from '../../../api-calls';

import validate from '../../../validation/schemas/edit-landing-page';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';

const { Col, Row } = Grid;

const initialState = {
  headline: '',
  subtitle: '',
  instructions: '',
  httpError: '',
  validationErrs: {},
  loading: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}

const EditLandingPage = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    headline,
    subtitle,
    instructions,
    httpError,
    validationErrs,
    loading,
  } = state;

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headline, subtitle, instructions]);
  const validateForm = () => {
    try {
      validate({
        headline,
        subtitle,
        instructions,
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

  const handleUpdate = async () => {
    setState({ loading: true });

    const { error } = await LandingPage.updateLandingPageContent({
      body: { headline, subtitle, instructions },
    });
    setState({ loading: false });
    if (error) {
      setState({ httpError: error.message });
    } else {
      //  show modal here
      setIsModalVisible(true);
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

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  useEffect(() => {
    const getLandingPageData = async () => {
      setState({ loading: false });

      const { error, data } = await LandingPage.getLandingPageContent({});

      setState({ loading: false });
      if (error) {
        setState({ httpError: error.message });
      } else {
        const { headline, subtitle, instructions } = data;
        setState({
          headline,
          subtitle,
          instructions,
        });
      }
    };

    getLandingPageData();
  }, []);
  return (
    <>
      <Row jc="space-between" mb={7}>
        <Col w={[4, 12, 7]}>
          <T.H1 mtM="5" style={{ width: '100%' }}>
            Edit Landing page{' '}
          </T.H1>
        </Col>
      </Row>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col w={[4, 12, 6]}>
            <Inputs.Textarea
              value={headline}
              label="Headline"
              handleChange={(value) => setState({ headline: value })}
              error={validationErrs.headline}
              rows={5}
            />
            <Inputs.Textarea
              value={instructions}
              label="Instructions"
              handleChange={(value) => setState({ instructions: value })}
              error={validationErrs.instructions}
              m={{ mt: '6' }}
              rows={5}
            />
          </Col>
          <Col w={[4, 12, 6]}>
            <Inputs.Textarea
              value={subtitle}
              label="Subtitle"
              handleChange={(value) => setState({ subtitle: value })}
              error={validationErrs.subtitle}
              rows={5}
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
              text="Save changes"
              type="submit"
            />
          </Col>
        </Row>
      </form>
      <Modal
        visible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        type={'updateSuccess'}
        title={'Updated'}
        description={'Changes successfully updated'}
        btnText="Okay"
      />
    </>
  );
};

export default EditLandingPage;
