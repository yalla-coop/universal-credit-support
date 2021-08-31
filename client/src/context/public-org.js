import { useEffect, createContext, useState, useContext } from 'react';
import { Organisations } from '../api-calls';
import { useParams } from 'react-router-dom';
import B from '../constants/benefit-calculator';

const initialPublicOrgState = {
  id: null,
  logoUrl: '',
  uniqueSlug: '',
  colors: {}, // to be used later
  contactLinks: [],
  benefitCalculatorLink: B.BENEFIT_CALCULATOR_LINK,
  benefitCalculatorLabel: B.BENEFIT_CALCULATOR_LABEL,
  organisationName: '',
};

const PublicOrgContext = createContext({
  publicOrg: initialPublicOrgState,
  setPublicOrg: () => {},
  logout: () => {},
});

// get help details/logo/colors
const PublicOrgProvider = (props) => {
  const { org: uniqueSlug } = useParams();
  const [publicOrg, setPublicOrg] = useState(initialPublicOrgState);

  const _setPublicOrg = (data) => {
    // set org in state
    setPublicOrg(data);
  };

  const getPublicOrgInfo = async (uniqueSlug) => {
    const { data } = await Organisations.getOrganisationByUniqueSlug({
      uniqueSlug,
    });
    if (data) {
      _setPublicOrg(data);
    } else {
      _setPublicOrg(initialPublicOrgState);
    }
  };

  useEffect(() => {
    getPublicOrgInfo(uniqueSlug);
    return () => _setPublicOrg(initialPublicOrgState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uniqueSlug]);

  const value = {
    publicOrg,
    getPublicOrgInfo,
    setPublicOrg: _setPublicOrg,
  };

  return <PublicOrgContext.Provider value={value} {...props} />;
};

const usePublicOrg = () => {
  const value = useContext(PublicOrgContext);
  return value;
};

export { PublicOrgProvider, usePublicOrg };
export default PublicOrgContext;
