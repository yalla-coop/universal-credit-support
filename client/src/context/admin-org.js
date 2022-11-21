import { useEffect, createContext, useState, useContext } from 'react';
import { Organisations } from '../api-calls';
import { useAuth } from './auth';
import { defaultResources } from '../constants/resources';

const initialUserState = {
  id: null,
  logoUrl: '',
  uniqueSlug: '',
  resources: [],
};

const AdminContext = createContext({
  adminOrg: initialUserState,
  setAdminOrg: () => {},
  getAdminOrgInfo: () => {},
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
      _setAdminOrg({
        ...data,
        resources: defaultResources.map((r) => {
          const resource = data?.resources?.find((res) => res.key === r.key);
          return resource || r;
        }),
      });
    } else {
      _setAdminOrg(initialUserState);
    }
  };

  useEffect(() => {
    getAdminOrgInfo();
    return () => _setAdminOrg(initialUserState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

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
