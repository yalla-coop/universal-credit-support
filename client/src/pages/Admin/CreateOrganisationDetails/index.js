import { useReducer, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../theme';
import { useAdminOrg } from '../../../context/admin-org';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  TextWithIcon,
} from '../../../components';
import * as S from './style';
import { createOrganisationDetails as validate } from '../../../validation/schemas';
import { Organisations } from '../../../api-calls';

import { navRoutes as R } from '../../../constants';
import { useAuth } from '../../../context/auth';
import SecondStep from './SecondStep';

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

const CreateOrganisationDetails = () => {
  const { user } = useAuth();
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    contactLinks,
    benefitCalculatorLink,
    benefitCalculatorLabel,
    loading,
    validationErrs,
    httpError,
  } = state;
  const { getAdminOrgInfo } = useAdminOrg();

  const lastContactLink = contactLinks[contactLinks.length - 1];

  const history = useHistory();

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactLinks, benefitCalculatorLink, benefitCalculatorLabel]);

  const validateForm = () => {
    try {
      validate({
        contactLinks: contactLinks.find((e) => !!e.type) ? contactLinks : null,
        benefitCalculatorLink,
        benefitCalculatorLabel,
      });
      setState({ validationErrs: { contactLinks: {} } });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({ validationErrs: { contactLinks: {}, ...error.inner } });
      }
      return false;
    }
  };

  const handleUpdate = async () => {
    setState({ loading: true });
    const { error } = await Organisations.updateOrganisation({
      id: user.organisationId,
      body: {
        contactLinks,
        benefitCalculatorLink,
        benefitCalculatorLabel,
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
      getAdminOrgInfo();
      history.push(R.ADMIN.CREATE_ORG_DETAILS_SECOND_STEP);
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
    setState(({ contactLinks }) => {
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
    setState(({ contactLinks }) => {
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

      return { contactLinks: _contactLinks };
    });
  };
  const handleRemoveContactLink = (id) => {
    setState(({ contactLinks }) => {
      const _contactLinks = contactLinks.map((e) => e);
      const itemsToUpdate = _contactLinks.filter((e) => e.id !== id);

      return { contactLinks: itemsToUpdate };
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
        <Col w={[4, 12, 8]}>
          <T.H1 weight="bold">Welcome!</T.H1>
          <T.P color="neutralDark" mt="4" mb="6">
            We will now take you through a few simple steps to customise the UC
            Helper. You will be able to add your organsation's logo, contact
            details, and your preferred benefit checker. It is fine to skip any
            step if you prefer not to add your own information. You can change
            any of the information you add at any point in time.
          </T.P>
        </Col>{' '}
        <Col w={[4, 11, 6]}>
          <T.H2>Contact Details</T.H2>
          <T.P isSmall color="neutralDark" mt="4">
            If you want customers to be able to contact you if they need further
            help when using the UC helper please add the relevant phone number,
            email address or webchat link below.
          </T.P>
          <T.P isSmall color="neutralDark" mt="4">
            If you leave this blank your customers will be directed to the
            government UC helpline if they need help with their claim.
          </T.P>
        </Col>
      </Row>
      {contactLinks.map((contactLink, i) => (
        <div key={contactLink.id}>
          <Row mt="7">
            <Col w={[4, 11, 6]}>
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
          </Row>
          {contactLink.type && (
            <>
              {' '}
              <Row mt="6">
                <Col w={[4, 11, 6]}>
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
              </Row>
              <Row mt="6">
                <Col w={[4, 11, 6]}>
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
              </Row>
              <Row mt="6">
                <Col w={[4, 11, 6]}>
                  <I.BasicInput
                    label="Description"
                    helper="Include a short description for what this contact channel is for e.g. 'Customer Support Centre' or 'Benefit Advice Webchat'"
                    placeholder="Type description here..."
                    value={contactLink.description}
                    handleChange={(v) =>
                      handleChangeLinkType(v, 'description', contactLink.id)
                    }
                    error={validationErrs?.contactLinks[i]?.description}
                  />
                </Col>
              </Row>
            </>
          )}

          {(i !== 0 || contactLinks.length > 1) && (
            <TextWithIcon
              text="Remove"
              icon="close"
              isButton
              mt="4"
              color="neutralMain"
              iconColor="primaryMain"
              handleClick={() => handleRemoveContactLink(contactLink.id)}
              weight="semi"
            />
          )}
        </div>
      ))}

      <Row>
        <Col w={[4, 11, 6]}>
          <TextWithIcon
            text="Add another contact"
            icon="add"
            isButton
            mt="5"
            color="neutralMain"
            iconColor="primaryMain"
            handleClick={handleAddNewContactLink}
            weight="semi"
            disabled={isAddButtonDisabled}
          />
        </Col>
      </Row>

      <Row>
        <Col w={[4, 12, 12]}>
          <T.H2 color="neutralMain" mt="7">
            Benefit calculator link
          </T.H2>
        </Col>
        <Col w={[4, 11, 6]} mt="6">
          <I.BasicInput
            label="Benefit calculator link"
            helper={
              <>
                Enter the full web link (including https://) of your
                organisation's preferred benefit calculator here
                <br />
                If you leave this blank your customers will be directed to
                Turn2Us.
              </>
            }
            placeholder="Type/paste link here..."
            value={benefitCalculatorLink}
            handleChange={(input) => setState({ benefitCalculatorLink: input })}
            error={validationErrs.benefitCalculatorLink}
          />
        </Col>
      </Row>
      {/* <Row mt="6">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="Benefit calculator button label"
            helper="Enter your preferred button label here"
            placeholder="e.g. Our benefit calculator"
            value={benefitCalculatorLabel}
            handleChange={(input) =>
              setState({ benefitCalculatorLabel: input })
            }
            error={validationErrs.benefitCalculatorLabel}
          />
        </Col>
      </Row> */}

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
            text="Next"
            type="submit"
          />
        </Col>
      </Row>
    </S.Form>
  );
};

export { SecondStep };
export default CreateOrganisationDetails;
