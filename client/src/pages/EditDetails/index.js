import { useReducer, useEffect, useRef, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  TextWithIcon,
} from '../../components';
import * as S from './style';
import { editDetails as validate } from '../../validation/schemas';
import { Organisations } from '../../api-calls';
import { useLang } from '../../context/lang';
import { t } from '../../helpers';

// TODO: use from constants
const contactLinksTypes = {
  PHONE: 'PHONE',
  WEBCHAT_LINK: 'WEBCHAT_LINK',
  EMAIL: 'EMAIL',
};
// TODO: use from constants
const contactLinksLabels = {
  PHONE: 'Phone number',
  WEBCHAT_LINK: 'Webchat link',
  EMAIL: 'Email',
};

const { Row, Col } = Grid;

const initialState = {
  formData: {
    name: '',
    email: '',
    organisationName: '',
    uniqueSlug: '',
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
    benefitCalculatorLink: '',
    benefitCalculatorLabel: '',
  },
  httpError: '',
  validationErrs: { contactLinks: {} },
  loading: false,
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
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    formData: {
      name,
      email,
      organisationName,
      uniqueSlug,
      contactLinks,
      benefitCalculatorLink,
      benefitCalculatorLabel,
    },
    loading,
    validationErrs,
    httpError,
  } = state;

  const lastContactLink = contactLinks[contactLinks.length - 1];

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  const setFormData = (data) =>
    setState((prevState) => ({ formData: { ...prevState.formData, ...data } }));

  const validateForm = useCallback(() => {
    try {
      validate({
        ...state.formData,
        contactLinks: contactLinks.find((e) => !!e.type) ? contactLinks : null,
      });
      setState({ validationErrs: { contactLinks: {} } });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({ validationErrs: { contactLinks: {}, ...error.inner } });
      }
      return false;
    }
  }, [contactLinks, state.formData]);

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
  }, [validateForm]);

  const handleUpdate = async () => {
    setState({ loading: true });
    const { error } = await Organisations.updateOrganisation({
      id: 1,
      body: {
        ...state.formData,
      },
    });

    setState({ loading: false });
    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { email: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      // TODO: show a success message once finished
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
    setState(({ formData: { contactLinks } }) => {
      const _contactLinks = contactLinks.map((e) => e);
      const itemToUpdate = _contactLinks.find((e) => e.id === id);
      itemToUpdate[key] = value;
      if (key === 'type') {
        itemToUpdate.phoneNumber = '';
        itemToUpdate.link = '';
        itemToUpdate.email = '';
      }

      return { contactLinks: _contactLinks };
    });
  };

  const handleAddNewContactLink = (e) => {
    e.preventDefault();
    setState(({ formData: { contactLinks } }) => {
      const sortedLinks = contactLinks.sort((a, b) => a.id - b.id);
      const lastContactLinkId = sortedLinks[sortedLinks.length - 1]?.id || 0;

      const _contactLinks = [
        ...contactLinks,
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

      return { formData: { contactLinks: _contactLinks } };
    });
  };

  const handleUniqueLink = (value) => {
    const uniqueSlug = value.trimStart().replace(' ', '-').toLowerCase();
    setFormData({ uniqueSlug });
  };

  const handleRemoveContactLink = (id) => {
    setState(({ formData: { contactLinks } }) => {
      const _contactLinks = contactLinks.map((e) => e);
      const itemsToUpdate = _contactLinks.filter((e) => e.id !== id);

      return { formData: { contactLinks: itemsToUpdate } };
    });
  };

  const isAddButtonDisabled =
    !(
      lastContactLink &&
      lastContactLink.type &&
      lastContactLink.description &&
      lastContactLink.availability &&
      (lastContactLink.phoneNumber ||
        lastContactLink.link ||
        lastContactLink.email)
    ) || !contactLinks.length;

  return (
    <S.Form onSubmit={handleSubmit}>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb="6" weight="bold">
            {t('editDetails.title', lang)}
          </T.H1>
        </Col>{' '}
        <Col w={[4, 6, 6]}>
          <T.P isSmall color="neutralDark" mt={4}>
            {t('editDetails.subtitle', lang)}
          </T.P>
        </Col>
      </Row>
      <Row mt={6}>
        <Col w={[4, 4, 4]}>
          <I.BasicInput
            label="Name"
            type="text"
            placeholder="Type name here..."
            value={name}
            handleChange={(name) => setFormData({ name })}
            error={validationErrs?.name}
          />
        </Col>
        <Col w={[4, 4, 4]} mt={isMobile ? 6 : 0}>
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
        <Col w={[4, 4, 4]}>
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
        <Col w={[4, 4, 4]}>
          <T.H2 mb={5} weight="bold">
            {t('yourUniqueLink', lang)}
          </T.H2>
        </Col>
      </Row>
      <Row mb={2}>
        <Col w={[4, 4, 4]}>
          <T.H3>
            {window.location.host}/{uniqueSlug}
          </T.H3>
        </Col>
      </Row>
      <Row mb={6}>
        <Col w={[4, 4, 4]}>
          <I.BasicInput
            value={uniqueSlug}
            handleChange={handleUniqueLink}
            error={validationErrs?.uniqueSlug}
          />
        </Col>
      </Row>

      <Row mt={6}>
        <Col w={[4, 4, 4]}>
          <T.H2 mb={5} weight="bold">
            {t('contact.title', lang)}
          </T.H2>
        </Col>
      </Row>
      {contactLinks.map((contactLink, i) => (
        <div key={contactLink.id}>
          <Row>
            <Col w={[4, 4, 4]}>
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
              <Col w={[4, 4, 4]} mt={isMobile ? 6 : 0}>
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
          </Row>

          {contactLink.type && (
            <Row mt={5}>
              <Col w={[4, 4, 4]}>
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

              <Col w={[4, 4, 4]} mt={isMobile ? 6 : 0}>
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
            </Row>
          )}

          {(i !== 0 || contactLinks.length > 1) && (
            <TextWithIcon
              text="Remove"
              icon="close"
              isButton
              mt={4}
              color="neutralMain"
              iconColor="primaryMain"
              handleClick={() => handleRemoveContactLink(contactLink.id)}
              weight="semi"
            />
          )}
        </div>
      ))}

      <Row>
        <Col w={[4, 4, 4]}>
          <TextWithIcon
            text="Add another contact"
            icon="add"
            isButton
            mt={5}
            color="neutralMain"
            iconColor="primaryMain"
            handleClick={handleAddNewContactLink}
            weight="semi"
            disabled={isAddButtonDisabled}
          />
        </Col>
      </Row>

      <Row mt={7}>
        <Col w={[4, 4, 4]}>
          <I.BasicInput
            label="Benefit calculator link"
            helper="Enter your preferred benefit calculator here"
            placeholder="Type/paste link here..."
            value={benefitCalculatorLink}
            handleChange={(input) =>
              setFormData({ benefitCalculatorLink: input })
            }
            error={validationErrs.benefitCalculatorLink}
          />
        </Col>
        <Col w={[4, 4, 4]} mt={isMobile ? 6 : 0}>
          <I.BasicInput
            label="Benefit calculator button label"
            helper="Enter your preferred button label here"
            placeholder="e.g. Our benefit calculator"
            value={benefitCalculatorLabel}
            handleChange={(input) =>
              setFormData({ benefitCalculatorLabel: input })
            }
            error={validationErrs.benefitCalculatorLabel}
          />
        </Col>
      </Row>

      <Row mt={7} style={{ flex: Number(isMobile), alignItems: 'flex-end' }}>
        <Col w={[4, 4, 4]} style={{ alignItems: 'flex-end' }}>
          {httpError && (
            <T.P mb={2} color="error">
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

      <Row mt={7}>
        <Col w={[4, 6, 6]}>
          <T.P isSmall color="neutralDark">
            {t('accountDelete', lang)}{' '}
            <T.Link to="#" color="neutralDark" weight="bold" underline>
              {t('hydeHousing', lang)}
            </T.Link>
          </T.P>
        </Col>
      </Row>
    </S.Form>
  );
};

export default EditDetails;
