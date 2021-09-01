import { useReducer, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Cards,
  Modal,
} from '../../../components';
import * as S from './style';
import { customise as validate } from '../../../validation/schemas';
import { Organisations } from '../../../api-calls';

import { navRoutes } from '../../../constants';
import { useAuth } from '../../../context/auth';
import { useAdminOrg } from '../../../context/admin-org';

const { Tips } = Cards;

const { Row, Col } = Grid;

const initialState = {
  mainColor: '',
  secondaryColor: '',
  neutralColor: '',
  httpError: '',
  validationErrs: { hasError: false },
  loading: false,
  displayColorPicker: false,
  logoFile: {},
  logoUploading: false,
  isModalVisible: false,
  loaded: false,
};

function reducer(state, newState) {
  let value = newState;
  if (typeof newState === 'function') {
    value = newState(state);
  }

  return { ...state, ...value };
}

const Customise = () => {
  const { user } = useAuth();
  const { getAdminOrgInfo } = useAdminOrg();
  const submitAttempt = useRef(false);

  const [state, setState] = useReducer(reducer, initialState);
  const {
    mainColor,
    secondaryColor,
    neutralColor,
    loading,
    validationErrs,
    httpError,
    logoFile,
    logoUploading,
    isModalVisible,
    loaded,
  } = state;

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  useEffect(() => {
    const getOrgInfo = async () => {
      const { error, data } = await Organisations.getOrganisation({
        id: user.organisationId,
      });

      if (!error) {
        const { colors } = data;
        setState({
          logoFile: {
            key: data.key,
            fileName: data.fileName,
            url: data.logoUrl,
          },
          mainColor: colors?.main,
          secondaryColor: colors?.secondary,
          neutralColor: colors?.neutral,
          loaded: true,
        });
      } else {
        setState(error.message);
      }
    };

    getOrgInfo();
  }, [user.organisationId]);

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
        logoFile: logoFile.key,
      });
      setState({ validationErrs: { hasError: false } });
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
      id: user.organisationId,
      body: {
        logoFile,
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
        setState({
          validationErrs: { [error.data.field]: error.message, hasError: true },
        });
      } else {
        setState({
          httpError: error.message,
          validationErrs: { hasError: false },
        });
      }
    } else {
      setState({ isModalVisible: true });
      getAdminOrgInfo();
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
      <Row mt={isMobile ? 6 : 0}>
        <Col w={[4, 12, 12]}>
          <T.H1 weight="bold">Let’s customise!</T.H1>
        </Col>
      </Row>

      <Row>
        <Col w={[4, 6, 4]} mt={7}>
          {loaded && (
            <I.ImageUpload
              uploading={logoUploading}
              setUploading={(bool) => setState({ logoUploading: bool })}
              fileInfo={logoFile}
              setFileInfo={(e) => setState({ logoFile: e })}
              error={validationErrs.logoFile}
              setError={(e) =>
                setState(({ validationErrs }) => ({
                  validationErrs: { ...validationErrs, logoFile: e },
                }))
              }
            />
          )}
        </Col>
      </Row>

      <Row mt="6">
        <Col w={[4, 12, 6]}>
          <T.H2>Colours</T.H2>
        </Col>
      </Row>

      <Row w mt="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={mainColor}
            onChange={(v) => setState({ mainColor: v })}
            label="Main colour"
            error={validationErrs.mainColor}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={secondaryColor}
            onChange={(v) => setState({ secondaryColor: v })}
            label="Secondary colour"
            error={validationErrs.secondaryColor}
          />
        </Col>
      </Row>

      <Row mt="6" mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={neutralColor}
            onChange={(v) => setState({ neutralColor: v })}
            label="Neutral colour"
            error={validationErrs.neutralColor}
          />
        </Col>
      </Row>

      <Tips
        cols={[4, 6, 4]}
        tips={[
          <T.H3 color="secondaryMain">
            Tip! Please be mindful of accessibility and testing your colours
            work. You can find more information{' '}
            <T.Link
              color="secondaryMain"
              to={navRoutes.EXTERNAL.ACCESSABILITY_GUIDELINES}
              weight={500}
              underline
            >
              here
            </T.Link>
          </T.H3>,
        ]}
        startingColor={1}
      />

      <Row
        mt="7"
        mtT="6"
        style={{ flex: Number(isMobile), alignItems: 'flex-end' }}
      >
        <Col w={[4, 6, 4]} style={{ alignItems: 'flex-end' }}>
          {httpError && (
            <T.P mb="2" color="error">
              {httpError}
            </T.P>
          )}
          <Button
            variant="primary"
            disabled={false}
            loading={loading || logoUploading}
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

export default Customise;
