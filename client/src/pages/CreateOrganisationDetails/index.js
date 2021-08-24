import { useReducer, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
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
import validate from '../../validation/schemas/login';
import { Users } from '../../api-calls';

import { navRoutes as R } from '../../constants';

// TODO: use from constants
const contactLinksTypes = {
  PHONE: 'PHONE',
  WEBCHAT_LINK: 'WEBCHAT_LINK',
};
// TODO: use from constants
const contactLinksLabels = {
  PHONE: 'Phone number',
  WEBCHAT_LINK: 'Webchat link',
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
      id: 0,
    },
  ],
  benefitCalculatorLink: '',
  benefitCalculatorLabel: '',
  httpError: '',
  validationErrs: {},
  loading: false,
};

function reducer(state, newState) {
  let value = newState;
  if (typeof newState === 'function') {
    value = newState(state);
  }

  return { ...state, ...value };
}
const cleanEmail = (email) => email.toLowerCase().trim();

const Login = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    contactLinks,
    email,
    password,
    benefitCalculatorLink,
    benefitCalculatorLabel,
    loading,
    validationErrs,
    httpError,
  } = state;

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
  }, [email, password]);

  const validateForm = () => {
    try {
      validate({
        email: cleanEmail(email),
        password,
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

  const handleLogin = async () => {
    const { error } = await Users.login({
      email: cleanEmail(email),
      password,
    });

    setState({ loading: false });
    if (error) {
      if (error.statusCode === 409) {
        setState({ validationErrs: { email: error.message } });
      } else {
        setState({ httpError: error.message });
      }
    } else {
      // after that the user should be directed to its dashboard
      history.push(R.ADMIN.HOME);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ loading: true });
    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      handleLogin();
    }
  };

  const handleChangeLinkType = (value, key, id) => {
    setState(({ contactLinks }) => {
      const _contactLinks = contactLinks.map((e) => e);
      const itemToUpdate = _contactLinks.find((e) => e.id === id);
      itemToUpdate[key] = value;

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
          type: '', //[PHONE, WEBCHAT_LINK]
          availability: '', //e.g. Monday to Friday (9am to 5pm)
          description: '',
          link: '',
          phoneNumber: '',
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
      (lastContactLink.phoneNumber || lastContactLink.link)
    ) || !contactLinks.length;
  return (
    <S.Form onSubmit={handleSubmit}>
      <T.H1 weight="bold">Welcome!</T.H1>
      <Row mt="6">
        <Col w={[4, 11, 6]}>
          <T.H2>Contact Details</T.H2>
          <T.P isSmall color="neutralDark" mt="4">
            The following contact details will direct customers who need
            assistance. If you want customers to be able to contact you please
            add your phone number or webchat link.
          </T.P>
        </Col>
      </Row>
      {contactLinks.map((contactLink, i) => (
        <>
          <Row mt="7" key={contactLink.id}>
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
              />
            </Col>
          </Row>
          {contactLink.type && (
            <>
              {' '}
              <Row mt="6">
                <Col w={[4, 11, 6]}>
                  {contactLink.type === contactLinksTypes.PHONE ? (
                    <I.BasicInput
                      label="Phone Number"
                      placeholder="Type number here..."
                      value={contactLink.phoneNumber}
                      handleChange={(v) =>
                        handleChangeLinkType(v, 'phoneNumber', contactLink.id)
                      }
                      error={validationErrs.email}
                    />
                  ) : (
                    <I.BasicInput
                      label="Link"
                      placeholder="Paste/type link here..."
                      value={contactLink.link}
                      handleChange={(v) =>
                        handleChangeLinkType(v, 'link', contactLink.id)
                      }
                      error={validationErrs.email}
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
                    error={validationErrs.email}
                  />
                </Col>
              </Row>
              <Row mt="6">
                <Col w={[4, 11, 6]}>
                  <I.BasicInput
                    label="Description"
                    helper="Include a short label for what this webchat is for e.g. Customer Support"
                    placeholder="Type description here..."
                    value={contactLink.description}
                    handleChange={(v) =>
                      handleChangeLinkType(v, 'description', contactLink.id)
                    }
                    error={validationErrs.email}
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
        </>
      ))}

      <TextWithIcon
        text="Add another example"
        icon="add"
        isButton
        mt="4"
        color="neutralMain"
        iconColor="primaryMain"
        handleClick={handleAddNewContactLink}
        weight="semi"
        disabled={isAddButtonDisabled}
      />

      <T.H2 color="neutralMain" mt="7">
        Benefit calculator link
      </T.H2>
      <Row mt="6">
        <Col w={[4, 11, 6]}>
          <I.BasicInput
            label="Benefit calculator link"
            helper="Enter your preferred benefit calculator here"
            placeholder="Type/paste link here..."
            value={benefitCalculatorLink}
            handleChange={(input) => setState({ benefitCalculatorLink: input })}
            error={validationErrs.benefitCalculatorLink}
          />
        </Col>
      </Row>
      <Row mt="6">
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
            text="Next"
            type="submit"
          />
        </Col>
      </Row>
    </S.Form>
  );
};

export default Login;
