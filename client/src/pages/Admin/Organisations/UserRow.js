import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Organisations as OrgsAPI } from '../../../api-calls';
import { Typography as T, Grid, Inputs, Modal } from '../../../components';
import * as S from './style';

import { navRoutes } from '../../../constants';
import moment from 'moment';
import userRoles from '../../../constants/roles';

const { Col } = Grid;
const { Dropdown } = Inputs;

const rolesOptions = [
  { label: 'Admin', value: 'ADMIN' },
  { label: 'Super Admin', value: 'SUPER_ADMIN' },
  { label: 'Remove account', value: 'REMOVE_ACCOUNT' },
];

const approvalOptions = [
  { label: 'Approve', value: 'APPROVED' },
  { label: 'Reject', value: 'REJECTED' },
];

const labels = {
  ADMIN: 'Admin',
  SUPER_ADMIN: 'Super Admin',
  AWAITING_APPROVAL: 'Awaiting Approval',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
};

const UserRow = ({
  name,
  email,
  role,
  setUsers,
  setError,
  id,
  organisation,
  organisationStatus,
  loggedInUser,
  setLoading,
  signupDate,
}) => {
  const originalRole = role;
  const [selectedRole, setSelectedRole] = useState(originalRole);

  const [submitRole, setSubmitRole] = useState(null);
  const [confirmUpdateRole, setConfirmUpdateRole] = useState(false);
  const [confirmUpdateStatus, setConfirmUpdateStatus] = useState(false);
  const [confirmDeleteUser, setConfirmDeleteUser] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedRole === 'REMOVE_ACCOUNT') {
      setConfirmDeleteUser({ id });
    } else if (selectedRole !== role) {
      setSubmitRole({ role: selectedRole, id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, selectedRole]);

  const onCancelUpdateRole = () => {
    if (submitRole && submitRole.role) {
      setSubmitRole(null);
    }
    if (confirmDelete) {
      setConfirmDelete(false);
    }
    setSelectedRole(originalRole);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await Users.updateUserRole(submitRole);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setUsers((old) =>
        old.map((user) =>
          user.id === data.id ? { ...user, role: submitRole.role } : user
        )
      );
      setError('');
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    const { error } = await Users.deleteUser({
      id: confirmDeleteUser.id,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setUsers((old) => old.filter((user) => user.id !== confirmDeleteUser.id));
      setError('');
    }
  };

  const handleUpdateStatus = async (status) => {
    if (status === 'REJECTED') {
      if (organisationStatus === 'REJECTED') return;
      return navigate(
        navRoutes.SUPER_ADMIN.REJECT_ORGANISATION.replace(':id', id)
      );
    }
    setLoading(true);
    const { error } = await OrgsAPI.updateOrganisationStatus({
      id,
      status,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setUsers((old) =>
        old.map((user) =>
          user.id === id ? { ...user, organisationStatus: status } : user
        )
      );
      setError('');
    }
  };

  return (
    <>
      <Col w={[4, 12, 3]} mbT={2}>
        <T.Link
          color="neutralMain"
          weight="bold"
          style={{ width: '100%' }}
          underline
          to={navRoutes.SUPER_ADMIN.ORGANISATION_DETAILS.replace(':id', id)}
        >
          {organisation}
        </T.Link>
      </Col>
      <Col w={[4, 12, 3]} mbT={2}>
        <T.P color="neutralMain" weight="bold">
          {email} {email === loggedInUser?.email && '(You)'}
        </T.P>
      </Col>
      <Col w={[4, 12, 3]} mbT={2}>
        {organisationStatus === 'APPROVED' ? (
          <Dropdown
            options={rolesOptions}
            allowClear="false"
            selected={selectedRole}
            handleChange={(value) => {
              setSelectedRole(value);
              if (value === 'REMOVE_ACCOUNT') {
                setConfirmDelete(true);
              } else if (value !== selectedRole) {
                setConfirmUpdateRole(true);
              }
            }}
            disabled={email === loggedInUser?.email}
          />
        ) : (
          <Dropdown
            options={approvalOptions}
            allowClear="false"
            selected={labels[organisationStatus]}
            handleChange={(value) => {
              handleUpdateStatus(value);
            }}
            disabled={email === loggedInUser?.email}
          />
        )}
      </Col>
      <Col w={[4, 12, 3]}>
        <T.P color="neutralMain">
          {moment(signupDate).format('DD MMMM YYYY')}
        </T.P>
      </Col>
      <S.Divider />
      <Modal
        type="updateSuccess"
        title="Are you sure?"
        description={
          submitRole?.role === userRoles.SUPER_ADMIN
            ? 'This will give the user access to edit any content on the tool and manage the access level of other administrators.'
            : 'This will remove the user’s access to edit any content on the tool and manage the access level of other administrators.'
        }
        visible={confirmUpdateRole}
        setIsModalVisible={setConfirmUpdateRole}
        onCancel={onCancelUpdateRole}
        parentFunc={handleSubmit}
      />

      <Modal
        type="updateSuccess"
        title="Are you sure?"
        description="Are you sure you want to delete this user?"
        visible={confirmDelete}
        setIsModalVisible={setConfirmDelete}
        onCancel={onCancelUpdateRole}
        parentFunc={handleDelete}
      />
      <Modal
        type="updateSuccess"
        title="Organisation approved"
        description="Thanks for reviewing this organisation. They will be notified by email that their profile has now been made public."
        visible={confirmUpdateStatus}
        setIsModalVisible={setConfirmUpdateStatus}
        onCancel={() => setConfirmUpdateStatus()}
        btnText="Close"
      />
    </>
  );
};

export default UserRow;
