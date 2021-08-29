import { useEffect, createContext, useState, useContext } from 'react';
import { Organisations } from '../api-calls';
import { useAuth } from './auth';

const initialUserState = {
  id: null,
  logUrl: '',
  uniqueSlug: '',
};

const AdminContext = createContext({
  org: initialUserState,
  setAdminOrg: () => {},
  logout: () => {},
});

const AdminOrgProvider = (props) => {
  const [org, setAdminOrg] = useState(initialUserState);
  const { user } = useAuth();

  const _setAdminOrg = (data) => {
    // set org in state
    setAdminOrg(data);
  };

  const getAdminOrgInfo = async () => {
    const { data } = await Organisations.getOrganisation({
      id: user.organisationId,
    });
    if (data) {
      _setAdminOrg(data);
    } else {
      setAdminOrg(initialUserState);
    }
  };

  useEffect(() => {
    getAdminOrgInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    org,
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
