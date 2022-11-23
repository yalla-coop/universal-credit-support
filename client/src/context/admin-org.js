import { useEffect, createContext, useState, useContext } from 'react';
import { Organisations } from '../api-calls';
import { useAuth } from './auth';
import { benefitCalculator } from '../constants';

const initialUserState = {
  id: null,
  logoUrl: '',
  uniqueSlug: '',
  benefitCalculatorLink: benefitCalculator.BENEFIT_CALCULATOR_LINK,
  benefitCalculatorLabel: benefitCalculator.BENEFIT_CALCULATOR_LABEL,
  status: null,
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
        contactLinks: data?.contactLinks?.map((e, i) => ({ ...e, id: i })),
        benefitCalculatorLink:
          data.benefitCalculatorLink ||
          benefitCalculator.BENEFIT_CALCULATOR_LINK,
        benefitCalculatorLabel:
          data.benefitCalculatorLabel ||
          benefitCalculator.BENEFIT_CALCULATOR_LABEL,
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
