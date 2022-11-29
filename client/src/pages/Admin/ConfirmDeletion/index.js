import { useState } from 'react';

import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Modal,
} from '../../../components';
import * as S from './style';
import { Users } from '../../../api-calls';
import { useAdminOrg } from '../../../context/admin-org';
import { useAuth } from '../../../context/auth';

import { navRoutes } from '../../../constants';

import { useNavigate } from 'react-router-dom';

const { Row, Col } = Grid;

const ConfirmDeletion = () => {
  const { adminOrg } = useAdminOrg();
  const { user, logout } = useAuth();
  const [slug, setSlug] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [httpError, setHttpError] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    const { error } = await Users.deleteUser({
      id: user.id,
    });

    setLoading(false);

    if (error) {
      setHttpError(error.message);
    } else {
      // console.log('every thing is good');
      setIsModalVisible(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDelete();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb="6" weight="bold">
            Confirm deletion
          </T.H1>
        </Col>{' '}
        <Col w={[4, 12, 6]}>
          <T.P color="neutralDark">
            Are you sure you wish to delete your account? This will permanently
            remove your profile, log in and all account details.
          </T.P>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 10, 6]} mt={6}>
          <T.P mb="2" color="neutralMain">
            Type{' '}
            <span style={{ fontWeight: 'bold' }}>{adminOrg.uniqueSlug}</span> to
            confirm
          </T.P>
          <I.BasicInput
            type="text"
            placeholder="Type your organisation name......"
            value={slug}
            handleChange={(value) => setSlug(value)}
          />
        </Col>
      </Row>

      <Row mt={6}>
        <Col w={[4, 10, 6]} style={{ alignItems: 'flex-end' }}>
          {httpError && (
            <T.P mb={2} color="error">
              {httpError}
            </T.P>
          )}

          <Button
            variant="primary"
            disabled={slug !== adminOrg.uniqueSlug}
            loading={loading}
            text="I understand, delete my account"
            type="submit"
          />
        </Col>
      </Row>

      <Modal
        visible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        title={'Account deleted'}
        parentFunc={() => {
          logout();
          navigate(navRoutes.GENERAL.HOME);
        }}
        onCancel={() => {
          logout();
          navigate(navRoutes.GENERAL.HOME);
        }}
        description={'Your account has now been successfully deleted. '}
        btnText="Return home"
      />
    </S.Form>
  );
};

export default ConfirmDeletion;
