import { useReducer, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';
import defaultColors from '../../../theme/colors';

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
          mainColor: colors?.main || defaultColors.primaryMainObj,
          secondaryColor: colors?.secondary || defaultColors.secondaryMainObj,
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
  }, [mainColor, secondaryColor]);

  const validateForm = () => {
    try {
      validate({
        secondStep: true,
        mainColor,
        secondaryColor,
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
        userId: user.id,
        logoFile,
        colors: {
          main: mainColor,
          secondary: secondaryColor,
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
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 weight="bold" style={{ width: '100%' }}>
            Add/update brand colours
          </T.H1>
          <T.P
            mt={6}
            // mb={isSuperAdmin ? '40px' : 4}
            color="neutralDark"
          >
            Customise how your page looks with the inputs below
          </T.P>
        </Col>
      </Row>

      <Row mt="6">
        <Col w={[4, 6, 4]}>
          <T.H2 color="neutralMain" ml="1" mb="1">
            Logo
          </T.H2>
          {loaded && (
            <I.ImageUpload
              uploading={logoUploading}
              setUploading={(bool) => setState({ logoUploading: bool })}
              fileInfo={logoFile}
              setFileInfo={(e) => setState({ logoFile: e })}
              error={validationErrs.logoFile}
              label="Click to upload"
              setError={(e) =>
                setState(({ validationErrs }) => ({
                  validationErrs: { ...validationErrs, logoFile: e },
                }))
              }
            />
          )}
        </Col>
      </Row>

      <Row mt="7" mb="4">
        <Col w={[4, 12, 6]}>
          <T.H2>Colours</T.H2>
        </Col>
      </Row>

      <Row w mb="6">
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

      <Row mb="6">
        <Col w={[4, 12, 8]}>
          <Tips
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
        </Col>
      </Row>

      <Row mt="7" style={{ flex: Number(isMobile), alignItems: 'flex-end' }}>
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
