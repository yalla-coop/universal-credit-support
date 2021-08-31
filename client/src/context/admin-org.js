import { useEffect, createContext, useState, useContext } from 'react';
import { Organisations } from '../api-calls';
import { useAuth } from './auth';

const initialUserState = {
  id: null,
  logoUrl: '',
  uniqueSlug: '',
};

const AdminContext = createContext({
  adminOrg: initialUserState,
  setAdminOrg: () => {},
  logout: () => {},
});

const AdminOrgProvider = (props) => {
  const [adminOrg, setAdminOrg] = useState(initialUserState);
  const { user } = useAuth();

  const _setAdminOrg = (data) => {
    // set adminOrg in state
    setAdminOrg(data);
  };

  const getAdminOrgInfo = async () => {
    const { data } = await Organisations.getOrganisation({
      id: user.organisationId,
    });
    if (data) {
      _setAdminOrg(data);
    } else {
      _setAdminOrg(initialUserState);
    }
  };

  useEffect(() => {
    getAdminOrgInfo();
    return () => _setAdminOrg(initialUserState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    adminOrg,
    getAdminOrgInfo,
    setAdminOrg: _setAdminOrg,
  };

  return <AdminContext.Provider value={value} {...props} />;
};

const useAdminOrg = () => {
  const value = useContext(AdminContext);
  return value;
};

export { AdminOrgProvider, useAdminOrg };
export default AdminContext;
