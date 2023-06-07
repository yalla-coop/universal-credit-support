import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN } from '../../../constants/nav-routes';

import { Typography as T, Button, Inputs, Grid } from '../../../components';

import { createUniqueLink as validateCreateUniqueLink } from '../../../validation/schemas';
import { Organisations } from '../../../api-calls';
import Success from './Success';
import { useAuth } from './../../../context/auth';

import * as S from './style';

const { BasicInput } = Inputs;
const { Row, Col } = Grid;

function CreateUniqueLink({ success }) {
  const [uniqueSlug, setUniqueSlug] = useState('');
  const [loading, setLoading] = useState(false);
  const submitAttempt = useRef(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { user } = useAuth();
  const validate = (value = uniqueSlug) => {
    try {
      if (submitAttempt.current) {
        validateCreateUniqueLink({
          uniqueSlug: value,
        });

        setErrors({});
      }
      return true;
    } catch (err) {
      if (err.name === 'ValidationError') {
        setErrors(err.inner);
      }
    }
  };

  const handleUniqueLink = (value) => {
    const cleanValue = value.trimStart().replace(' ', '-').toLowerCase();
    validate(cleanValue);
    setUniqueSlug(cleanValue);
  };

  const handleSubmit = async () => {
    try {
      submitAttempt.current = true;

      validateCreateUniqueLink({
        uniqueSlug,
      });
      setLoading(true);
      const { error } = await Organisations.updateOrganisation({
        id: user.organisationId,
        body: { uniqueSlug },
      });
      if (!error) {
        navigate(ADMIN.CREATE_UNIQUE_LINK_SUCCESS);
      } else {
        if (error.statusCode === 409) {
          setErrors({ uniqueSlug: error.message });
        } else {
          setErrors({ httpError: error.message });
        }
      }
      setLoading(false);
    } catch (err) {
      if (err.name === 'ValidationError') {
        setErrors(err.inner);
      }
    }
  };

  useEffect(() => {
    const getOrgInfo = async () => {
      const { error, data } = await Organisations.getOrganisation({
        id: user.organisationId,
      });

      if (!error) {
        setUniqueSlug(data.uniqueSlug);
      } else {
        setErrors((_) => ({ ..._, httpError: error.message }));
      }
    };

    getOrgInfo();
  }, [user.organisationId]);

  if (success) return <Success uniqueSlug={uniqueSlug} />;
  return (
    <S.Container>
      <Row>
        <Col w={[4, 11, 8]}>
          <T.H1 color="neutralMain" mb={6}>
            Create unique link
          </T.H1>
          <T.P color="neutralDark" mb={6}>
            Now we’ve finished customising your tool, let’s create a unique link
            for your organisation. This is the link you will need to share with
            your customers to access the tool.
          </T.P>
          <T.P color="neutralDark" mb={6}>
            To change your unique link edit the text in the input field below.
            Your link will then be {window.location.origin}/[insert-your-
            organisation-name here]).
          </T.P>
          <div>
            <T.H2 mb={5}>Your unique link</T.H2>
            <T.H3 mb={3}>
              {window.location.origin}/{uniqueSlug}
            </T.H3>
          </div>
          <BasicInput
            value={uniqueSlug}
            handleChange={handleUniqueLink}
            m={{ mb: 6 }}
            error={errors.uniqueSlug}
          />
          {errors.httpError && <T.P color="error">{errors.httpError}</T.P>}
          <Button
            handleClick={handleSubmit}
            label="Button"
            text="Next"
            variant="primary"
            loading={loading}
          />
        </Col>
      </Row>
    </S.Container>
  );
}

export default CreateUniqueLink;
