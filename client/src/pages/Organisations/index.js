import { useEffect, useState } from 'react';
import { Users } from '../../api-calls';
import {
  Typography as T,
  Grid,
  TextWithIcon,
  Cards as C,
  Inputs,
} from '../../components';

const { Row, Col } = Grid;
const { Dropdown } = Inputs;

const options = [
  { label: 'Admin', value: 'ADMIN' },
  { label: 'Super Admin', value: 'SUPER_ADMIN' },
  { label: 'Remove account', value: 'REMOVE_ACCOUNT' },
];

const UserRow = ({ name, email, role }) => {
  const [selected, setSelected] = useState(role);
  useEffect(() => {
    if (selected !== role) {
      console.log('bbbb');
    }
  }, [role, selected]);
  return (
    <>
      <Col w={[4, 4, 4]}>
        <T.P color="neutralMain" mb="6" weight="bold">
          {name}
        </T.P>
      </Col>
      <Col w={[4, 4, 4]}>
        <T.P color="neutralMain" mb="6" weight="bold">
          {email}
        </T.P>
      </Col>
      <Col w={[4, 4, 4]} mb="4">
        <Dropdown
          options={options}
          selected={selected}
          handleChange={setSelected}
        />
      </Col>
    </>
  );
};

const Organisations = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data, error } = await Users.getAdminUsers();
      if (error) {
        console.log({ error });
      } else {
        console.log({ data });
        setUsers(data);
      }
    };

    getUsers();
  }, []);

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
        <Col w={[4, 4, 4]}>
          <T.P color="neutralMain" mb="6" weight="bold">
            Name
          </T.P>
        </Col>
        <Col w={[4, 4, 4]}>
          <T.P color="neutralMain" mb="6" weight="bold">
            Email
          </T.P>
        </Col>
        <Col w={[4, 4, 4]}>
          <T.P color="neutralMain" mb="6" weight="bold">
            Role
          </T.P>
        </Col>
      </Row>
      {users &&
        users.map((user) => (
          <Row>
            <UserRow
              name={user.firstName}
              email={user.email}
              role={user.role}
            />
          </Row>
        ))}
    </>
  );
};

export default Organisations;
