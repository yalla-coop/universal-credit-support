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
  // colors
  primaryBgMain: '',
  secondaryBgMain: '',
  tertiaryBgMain: '',
  quartenaryBgMain: '',
  quinaryBgMain: '',
  primaryTextMain: '',
  secondaryTextMain: '',
  tertiaryTextMain: '',
  quartenaryTextMain: '',
  quinaryTextMain: '',
  useBlockColors: false,
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
    loading,
    validationErrs,
    httpError,
    logoFile,
    logoUploading,
    isModalVisible,
    loaded,
    // colors
    useBlockColors,
    primaryBgMain,
    secondaryBgMain,
    tertiaryBgMain,
    quartenaryBgMain,
    quinaryBgMain,
    primaryTextMain,
    secondaryTextMain,
    tertiaryTextMain,
    quartenaryTextMain,
    quinaryTextMain,
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
          useBlockColors: colors?.useBlockColors || false,
          primaryBgMain: colors?.primaryBgMain || defaultColors.primaryMainObj,
          secondaryBgMain:
            colors?.secondaryBgMain || defaultColors.primaryMainObj,
          tertiaryBgMain:
            colors?.tertiaryBgMain || defaultColors.primaryMainObj,
          quartenaryBgMain:
            colors?.quartenaryBgMain || defaultColors.primaryMainObj,
          quinaryBgMain: colors?.quinaryBgMain || defaultColors.primaryMainObj,
          primaryTextMain:
            colors?.primaryTextMain || defaultColors.primaryMainObj,
          secondaryTextMain:
            colors?.secondaryTextMain || defaultColors.primaryMainObj,
          tertiaryTextMain:
            colors?.tertiaryTextMain || defaultColors.primaryMainObj,
          quartenaryTextMain:
            colors?.quartenaryTextMain || defaultColors.primaryMainObj,
          quinaryTextMain:
            colors?.quinaryTextMain || defaultColors.primaryMainObj,
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
  }, [
    useBlockColors,
    primaryBgMain,
    secondaryBgMain,
    tertiaryBgMain,
    quartenaryBgMain,
    quinaryBgMain,
    primaryTextMain,
    secondaryTextMain,
    tertiaryTextMain,
    quartenaryTextMain,
    quinaryTextMain,
  ]);

  const validateForm = () => {
    try {
      validate({
        secondStep: true,
        primaryBgMain,
        secondaryBgMain,
        tertiaryBgMain,
        quartenaryBgMain,
        quinaryBgMain,
        primaryTextMain,
        secondaryTextMain,
        tertiaryTextMain,
        quartenaryTextMain,
        quinaryTextMain,
        useBlockColors,
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
      id: user.id,
      body: {
        userId: user.organisationId,
        logoFile,
        colors: {
          useBlockColors,
          primaryBgMain,
          secondaryBgMain,
          tertiaryBgMain,
          quartenaryBgMain,
          quinaryBgMain,
          primaryTextMain,
          secondaryTextMain,
          tertiaryTextMain,
          quartenaryTextMain,
          quinaryTextMain,
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
            color={primaryBgMain}
            onChange={(v) => setState({ primaryBgMain: v })}
            label="Main Background Color"
            error={validationErrs.primaryBgMain}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={primaryTextMain}
            onChange={(v) => setState({ primaryTextMain: v })}
            label="Main Text Color"
            error={validationErrs.primaryTextMain}
          />
        </Col>
      </Row>
      <Row w mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={secondaryBgMain}
            onChange={(v) => setState({ secondaryBgMain: v })}
            label="Secondary Background Color"
            error={validationErrs.secondaryBgMain}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={secondaryTextMain}
            onChange={(v) => setState({ secondaryTextMain: v })}
            label="Secondary Text Color"
            error={validationErrs.secondaryTextMain}
          />
        </Col>
      </Row>
      <Row w mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={tertiaryBgMain}
            onChange={(v) => setState({ tertiaryBgMain: v })}
            label="Tertiary Background Color"
            error={validationErrs.tertiaryBgMain}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={tertiaryTextMain}
            onChange={(v) => setState({ tertiaryTextMain: v })}
            label="Tertiary Text Color"
            error={validationErrs.tertiaryTextMain}
          />
        </Col>
      </Row>
      <Row w mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={quartenaryBgMain}
            onChange={(v) => setState({ quartenaryBgMain: v })}
            label="Quartenary Background Color"
            error={validationErrs.quartenaryBgMain}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={quartenaryTextMain}
            onChange={(v) => setState({ quartenaryTextMain: v })}
            label="Quartenary Text Color"
            error={validationErrs.quartenaryTextMain}
          />
        </Col>
      </Row>
      <Row w mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={quinaryBgMain}
            onChange={(v) => setState({ quinaryBgMain: v })}
            label="Quinary Background Color"
            error={validationErrs.quinaryBgMain}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={quinaryTextMain}
            onChange={(v) => setState({ quinaryTextMain: v })}
            label="Quinary Text Color"
            error={validationErrs.quinaryTextMain}
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
      <Row>
        <Col w={[4, 4, 4]}>
          <I.Checkbox
            label="If you prefer a block colour header to default gradient, tick this box"
            checked={useBlockColors}
            handleChange={(checked) => setState({ useBlockColors: checked })}
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
