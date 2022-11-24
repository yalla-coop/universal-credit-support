import { useEffect, useState } from 'react';
import { Users } from '../../../api-calls';
import { Typography as T, Grid } from '../../../components';
import { useAuth } from './../../../context/auth';
import Loading from '../../../components/Loading';
import Button from '../../../components/Button';
import UserRow from './UserRow';
import useCsvDownload from './../../../Hooks/useCsvDownload';

const { Row, Col } = Grid;

const Organisations = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const { user: loggedInUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [, handleClick] = useCsvDownload(`/csv/organisations`);

  useEffect(() => {
    const getUsers = async () => {
      const { data, error } = await Users.getAdminUsers();
      if (error) {
        setError(error.message);
      } else {
        setUsers(data);
      }
    };

    getUsers();
  }, []);

  if (loading) return <Loading type={'page'} />;
  return (
    <>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mtM="5" style={{ width: '100%' }}>
            Organisations
          </T.H1>
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[0, 0, 3]}>
          <T.P color="neutralMain" mb="6" weight="bold">
            Name
          </T.P>
        </Col>
        <Col w={[0, 0, 3]}>
          <T.P color="neutralMain" mb="6" weight="bold">
            Email
          </T.P>
        </Col>
        <Col w={[0, 0, 3]}>
          <T.P color="neutralMain" mb="6" weight="bold">
            Role
          </T.P>
        </Col>
        <Col w={[0, 0, 3]}>
          <T.P color="neutralMain" mb="6" weight="bold">
            Sign up date
          </T.P>
        </Col>
      </Row>
      {users &&
        users
          .sort((a, b) => a.organisationId - b.organisationId)
          .map((user) => (
            <Row key={user.id} ai="center" mb={6} mbT={2}>
              <UserRow
                name={`${user.firstName} ${user.lastName}`}
                email={user.email}
                role={user.role}
                setUsers={setUsers}
                setError={setError}
                id={user.id}
                organisation={user.organisationName}
                organisationStatus={user.organisationStatus}
                loggedInUser={loggedInUser}
                setLoading={setLoading}
                signupDate={user.createdAt}
              />
            </Row>
          ))}
      {error && <T.P color="error">{error}</T.P>}
      <Row mt="6" mtT="6">
        <Col w={[4, 11, 6]} style={{ alignItems: 'flex-end' }}>
          <Button
            variant="primary"
            disabled={false}
            loading={loading}
            text="Export organisations"
            type="button"
            onClick={handleClick}
          />
        </Col>
      </Row>
    </>
  );
};

export default Organisations;
