import { Fragment, useReducer, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';
import { benefitCalculator, types } from '../../../constants';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Modal,
  TextWithIcon,
} from '../../../components';
import * as S from './style';
import { customiseResources as validate } from '../../../validation/schemas';
import { Organisations } from '../../../api-calls';
import { useAdminOrg } from '../../../context/admin-org';
import { useAuth } from '../../../context/auth';

const { Row, Col } = Grid;

const { contactLinksTypes, contactLinksLabels } = types;
const initialState = {
  formData: {
    contactLinks: [
      {
        type: '', //[PHONE, WEBCHAT_LINK]
        availability: '', //e.g. Monday to Friday (9am to 5pm)
        description: '',
        link: '',
        phoneNumber: '',
        email: '',
        id: 0,
      },
    ],
    benefitCalculatorLink: benefitCalculator.BENEFIT_CALCULATOR_LINK,
    benefitCalculatorLabel: benefitCalculator.BENEFIT_CALCULATOR_LABEL,
  },
  httpError: '',
  validationErrs: { contactLinks: {} },
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

const CustomiseResources = () => {
  const { adminOrg, getAdminOrgInfo } = useAdminOrg();
  const submitAttempt = useRef(false);
  const { user } = useAuth();
  const [state, setState] = useReducer(reducer, initialState);
  const {
    formData: { contactLinks, benefitCalculatorLink, benefitCalculatorLabel },
    loading,
    validationErrs,
    httpError,
    isModalVisible,
  } = state;

  const lastContactLink =
    contactLinks?.length && contactLinks[contactLinks.length - 1];

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  const setFormData = (data) =>
    setState((prevState) => ({ formData: { ...prevState.formData, ...data } }));

  const validateForm = () => {
    try {
      validate({
        ...state.formData,
        contactLinks: contactLinks.find((e) => !!e.type) ? contactLinks : null,
      });
      setState({ validationErrs: { contactLinks: {}, hasError: false } });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({
          validationErrs: { contactLinks: {}, ...error.inner, hasError: true },
        });
      }
      return false;
    }
  };

  useEffect(() => {
    if (adminOrg.id) {
      setFormData({
        contactLinks: adminOrg.contactLinks?.length
          ? adminOrg.contactLinks
          : initialState.formData.contactLinks,
        benefitCalculatorLink: adminOrg.benefitCalculatorLink,
        benefitCalculatorLabel: adminOrg.benefitCalculatorLabel,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminOrg.id]);

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactLinks, benefitCalculatorLink, benefitCalculatorLabel]);
  const handleUpdate = async () => {
    setState({ loading: true });

    const { error } = await Organisations.updateOrganisation({
      id: user.organisationId,
      body: {
        ...state.formData,
        benefitCalculatorLink:
          benefitCalculatorLink === benefitCalculator.BENEFIT_CALCULATOR_LINK
            ? ''
            : benefitCalculatorLink,
        benefitCalculatorLabel:
          benefitCalculatorLabel === benefitCalculator.BENEFIT_CALCULATOR_LABEL
            ? ''
            : benefitCalculatorLabel,
      },
    });

    setState({ loading: false });
    if (error) {
      setState({
        httpError: error.message,
        validationErrs: { contactLinks: {}, hasError: false },
      });
    } else {
      getAdminOrgInfo();
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

  const handleChangeLinkType = (value, key, id) => {
    setState(({ formData }) => {
      const _contactLinks = formData.contactLinks.map((e) => e);
      const itemToUpdate = _contactLinks.find((e) => e.id === id);
      itemToUpdate[key] = value;
      if (key === 'type') {
        itemToUpdate.phoneNumber = '';
        itemToUpdate.link = '';
        itemToUpdate.email = '';
      }

      return { formData: { ...formData, contactLinks: _contactLinks } };
    });
  };

  const handleAddNewContactLink = (e) => {
    e.preventDefault();
    setState(({ formData }) => {
      const sortedLinks = formData.contactLinks.sort((a, b) => a.id - b.id);
      const lastContactLinkId = sortedLinks[sortedLinks.length - 1]?.id || 0;

      const _contactLinks = [
        ...formData.contactLinks,
        {
          type: '',
          availability: '',
          description: '',
          link: '',
          phoneNumber: '',
          email: '',
          id: lastContactLinkId + 1,
        },
      ];

      return { formData: { ...formData, contactLinks: _contactLinks } };
    });
  };

  const handleRemoveContactLink = (id) => {
    setState(({ formData }) => {
      const _contactLinks = formData.contactLinks.map((e) => e);
      const itemsToUpdate = _contactLinks.filter((e) => e.id !== id);

      return { formData: { ...formData, contactLinks: itemsToUpdate } };
    });
  };

  const isAddButtonDisabled =
    !(
      lastContactLink &&
      lastContactLink?.type &&
      lastContactLink?.description &&
      lastContactLink?.availability &&
      (lastContactLink?.phoneNumber ||
        lastContactLink?.link ||
        lastContactLink?.email)
    ) || !contactLinks?.length;

  return (
    <S.Form onSubmit={handleSubmit}>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb="6" weight="bold">
            Customise resources and phone numbers
          </T.H1>
        </Col>{' '}
        <Col w={[4, 12, 10]}>
          <T.P isSmall color="neutralDark" mb={6}>
            Below are the default resource links used in the app. You can type
            in your own ones below and click the reset icon to restore to
            default.{' '}
          </T.P>
        </Col>
      </Row>

      <S.Section bg="neutralSurface">
        <Col w={[4, 12, 12]} mb={4}>
          <S.SectionTitle weight="semi">Contact details</S.SectionTitle>
        </Col>

        {contactLinks.map((contactLink, i) => (
          <Fragment key={contactLink.id} style={{ width: '100%' }}>
            <Col w={[4, 12, 6]}>
              <I.Dropdown
                label="Type of contact"
                selected={contactLink.type}
                handleChange={(v) =>
                  handleChangeLinkType(v, 'type', contactLink.id)
                }
                options={Object.entries(contactLinksLabels).map(
                  ([key, value]) => ({
                    label: value,
                    value: key,
                  })
                )}
                allowClear={false}
                error={validationErrs?.contactLinks[i]?.type}
              />
            </Col>
            {contactLink.type && (
              <Col w={[4, 12, 6]} mtT={6}>
                {contactLink.type === contactLinksTypes.PHONE && (
                  <I.BasicInput
                    label="Phone Number"
                    placeholder="Type number here..."
                    value={contactLink.phoneNumber}
                    handleChange={(v) =>
                      handleChangeLinkType(v, 'phoneNumber', contactLink.id)
                    }
                    error={validationErrs?.contactLinks[i]?.phoneNumber}
                  />
                )}
                {contactLink.type === contactLinksTypes.WEBCHAT_LINK && (
                  <I.BasicInput
                    label="Link"
                    placeholder="Paste/type link here..."
                    value={contactLink.link}
                    handleChange={(v) =>
                      handleChangeLinkType(v, 'link', contactLink.id)
                    }
                    error={validationErrs?.contactLinks[i]?.link}
                  />
                )}
                {contactLink.type === contactLinksTypes.EMAIL && (
                  <I.BasicInput
                    label="Email"
                    type="email"
                    placeholder="Type email here..."
                    value={contactLink.email}
                    handleChange={(v) =>
                      handleChangeLinkType(v, 'email', contactLink.id)
                    }
                    error={validationErrs?.contactLinks[i]?.email}
                  />
                )}
              </Col>
            )}

            {contactLink.type && (
              <>
                <Col w={[4, 12, 6]} mt={6}>
                  <I.BasicInput
                    label="Availability"
                    helper="e.g. Monday to Friday (9am to 5pm)"
                    placeholder="Type availability here..."
                    value={contactLink.availability}
                    handleChange={(v) =>
                      handleChangeLinkType(v, 'availability', contactLink.id)
                    }
                    error={validationErrs?.contactLinks[i]?.availability}
                  />
                </Col>

                <Col w={[4, 12, 6]} mt={6}>
                  <I.BasicInput
                    label="Description"
                    helper="Include a short label for what this webchat is for e.g. Customer Support"
                    placeholder="Type description here..."
                    value={contactLink.description}
                    handleChange={(v) =>
                      handleChangeLinkType(v, 'description', contactLink.id)
                    }
                    error={validationErrs?.contactLinks[i]?.description}
                  />
                </Col>
              </>
            )}

            {(i !== 0 || contactLinks.length > 1) && (
              <TextWithIcon
                text="Remove"
                icon="close"
                isButton
                mt={4}
                mb={6}
                color="neutralMain"
                iconColor="primaryMain"
                handleClick={() => handleRemoveContactLink(contactLink.id)}
                weight="semi"
              />
            )}
          </Fragment>
        ))}

        <Col w={[4, 12, 12]} mt={6}>
          <TextWithIcon
            text="Add another contact"
            icon="add"
            isButton
            color="neutralMain"
            iconColor="primaryMain"
            handleClick={handleAddNewContactLink}
            weight="semi"
            disabled={isAddButtonDisabled}
          />
        </Col>
      </S.Section>

      <S.Section bg="secondaryLight">
        <Col w={[4, 12, 12]} mb={4}>
          <S.SectionTitle weight="semi">Benefit Calculator</S.SectionTitle>
        </Col>

        <Col w={[4, 12, 6]}>
          <I.BasicInput
            label="Benefit calculator link"
            helper={'Enter your preferred benefit calculator here'}
            placeholder="Type/paste link here..."
            value={benefitCalculatorLink}
            handleChange={(input) =>
              setFormData({ benefitCalculatorLink: input })
            }
            resetValue={benefitCalculator.BENEFIT_CALCULATOR_LINK}
            error={validationErrs.benefitCalculatorLink}
          />
        </Col>
        <Col w={[4, 12, 6]} mtT={5}>
          <I.BasicInput
            label="Benefit calculator button label"
            helper="Enter your preferred benefit calculator here"
            placeholder="e.g. Our benefit calculator"
            value={benefitCalculatorLabel}
            handleChange={(input) =>
              setFormData({ benefitCalculatorLabel: input })
            }
            resetValue={benefitCalculator.BENEFIT_CALCULATOR_LABEL}
            error={validationErrs.benefitCalculatorLabel}
          />
        </Col>
      </S.Section>

      <Row mt={7} style={{ flex: Number(isMobile), alignItems: 'flex-end' }}>
        {httpError && (
          <Col w={[4, 12, 12]}>
            <T.P mb={2} color="error">
              {httpError}
            </T.P>
          </Col>
        )}
        {validationErrs?.hasError ? (
          <Col w={[4, 12, 12]}>
            <T.P mb="2" color="error">
              At least one of the input fields has not been filled in or details
              entered incorrectly. Please check the form above for more details.
            </T.P>
          </Col>
        ) : null}
        <Col w={[4, 12, 6]}>
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

export default CustomiseResources;
