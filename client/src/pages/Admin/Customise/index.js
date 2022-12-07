import { useReducer, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';
import { defaultColors } from '../../../theme/colors';
import formatColor from '../../../helpers/format-color';

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
  httpError: '',
  validationErrs: { hasError: false },
  loading: false,
  displayColorPicker: false,
  logoFile: {},
  logoUploading: false,
  isModalVisible: false,
  loaded: false,
  // colors
  mainHeaderBgColor: '',
  section1BgColor: '',
  section2BgColor: '',
  section3BgColor: '',
  section4BgColor: '',
  section5BgColor: '',
  section1TextColor: '',
  section2TextColor: '',
  section3TextColor: '',
  section4TextColor: '',
  section5TextColor: '',
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
    mainHeaderBgColor,
    section1BgColor,
    section2BgColor,
    section3BgColor,
    section4BgColor,
    section5BgColor,
    section1TextColor,
    section2TextColor,
    section3TextColor,
    section4TextColor,
    section5TextColor,
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
          mainHeaderBgColor: colors?.mainHeaderBgColor
            ? formatColor(colors.mainHeaderBgColor)
            : '',
          section1BgColor:
            colors?.section1BgColor ||
            formatColor(defaultColors.section1BgColor),
          section2BgColor:
            colors?.section2BgColor ||
            formatColor(defaultColors.section2BgColor),
          section3BgColor:
            colors?.section3BgColor ||
            formatColor(defaultColors.section3BgColor),
          section4BgColor:
            colors?.section4BgColor ||
            formatColor(defaultColors.section4BgColor),
          section5BgColor:
            colors?.section5BgColor ||
            formatColor(defaultColors.section5BgColor),
          section1TextColor:
            colors?.section1TextColor ||
            formatColor(defaultColors.section1TextColor),
          section2TextColor:
            colors?.section2TextColor ||
            formatColor(defaultColors.section2TextColor),
          section3TextColor:
            colors?.section3TextColor ||
            formatColor(defaultColors.section3TextColor),
          section4TextColor:
            colors?.section4TextColor ||
            formatColor(defaultColors.section4TextColor),
          section5TextColor:
            colors?.section5TextColor ||
            formatColor(defaultColors.section5TextColor),

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
    mainHeaderBgColor,
    section1BgColor,
    section2BgColor,
    section3BgColor,
    section4BgColor,
    section5BgColor,
    section1TextColor,
    section2TextColor,
    section3TextColor,
    section4TextColor,
    section5TextColor,
  ]);

  const validateForm = () => {
    try {
      validate({
        secondStep: true,
        mainHeaderBgColor,
        section1BgColor,
        section2BgColor,
        section3BgColor,
        section4BgColor,
        section5BgColor,
        section1TextColor,
        section2TextColor,
        section3TextColor,
        section4TextColor,
        section5TextColor,
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
          mainHeaderBgColor,
          section1BgColor,
          section2BgColor,
          section3BgColor,
          section4BgColor,
          section5BgColor,
          section1TextColor,
          section2TextColor,
          section3TextColor,
          section4TextColor,
          section5TextColor,
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
          <T.H1 weight="bold">Add/update brand colours</T.H1>
        </Col>
        <Col w={[4, 12, 12]}>
          <T.P
            mt={6}
            // mb={isSuperAdmin ? '40px' : 4}
            color="neutralDark"
          >
            Customise how your page looks with the inputs below
          </T.P>
        </Col>
      </Row>

      <Row>
        <Col w={[4, 6, 4]} mt={6}>
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
        <Col w={[4, 12, 12]}>
          <T.P color="neutralDark" mt="4">
            The default main header is a gradient background. If you would like
            to change it to your main brand colour you can do that below.
          </T.P>
        </Col>
      </Row>
      <Row my="4">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={mainHeaderBgColor || ''}
            onChange={(v) => setState({ mainHeaderBgColor: v })}
            label="Main header background colour"
            error={validationErrs.mainHeaderBgColor}
          />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.P color="neutralDark" mt="6">
            To change the main section cards on the landing page and each
            section header, please select your brand colours below
          </T.P>
        </Col>
      </Row>
      <Row w mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={section1BgColor}
            onChange={(v) => setState({ section1BgColor: v })}
            label="Section 1 background colour"
            error={validationErrs.section1BgColor}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={section1TextColor}
            onChange={(v) => setState({ section1TextColor: v })}
            label="Section 1 text colour"
            error={validationErrs.section1TextColor}
          />
        </Col>
      </Row>
      <Row w mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={section2BgColor}
            onChange={(v) => setState({ section2BgColor: v })}
            label="Section 2 background colour"
            error={validationErrs.section2BgColor}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={section2TextColor}
            onChange={(v) => setState({ section2TextColor: v })}
            label="Section 2 text colour"
            error={validationErrs.section2TextColor}
          />
        </Col>
      </Row>
      <Row w mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={section3BgColor}
            onChange={(v) => setState({ section3BgColor: v })}
            label="Section 3 background colour"
            error={validationErrs.section3BgColor}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={section3TextColor}
            onChange={(v) => setState({ section3TextColor: v })}
            label="Section 3 text colour"
            error={validationErrs.section3TextColor}
          />
        </Col>
      </Row>
      <Row w mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={section4BgColor}
            onChange={(v) => setState({ section4BgColor: v })}
            label="Section 4 background colour"
            error={validationErrs.section4BgColor}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={section4TextColor}
            onChange={(v) => setState({ section4TextColor: v })}
            label="Section 4 text colour"
            error={validationErrs.section4TextColor}
          />
        </Col>
      </Row>
      <Row w mb="6">
        <Col w={[4, 6, 4]}>
          <I.ColorPicker
            color={section5BgColor}
            onChange={(v) => setState({ section5BgColor: v })}
            label="Section 5 background colour"
            error={validationErrs.section5BgColor}
          />
        </Col>
        <Col w={[4, 6, 4]} mt={isMobile ? 6 : 0}>
          <I.ColorPicker
            color={section5TextColor}
            onChange={(v) => setState({ section5TextColor: v })}
            label="Section 5 text colour"
            error={validationErrs.section5TextColor}
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
