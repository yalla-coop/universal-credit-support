import { useEffect, createContext, useState, useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Organisations } from '../api-calls';
import { useParams } from 'react-router-dom';
import B from '../constants/benefit-calculator';

import setColor from '../helpers/set-color-variations';
import formatColor from '../helpers/format-color';
import updateGradients from '../helpers/update-gradients';
import colors from '../theme/colors';

const initialPublicOrgState = {
  id: null,
  logoUrl: '',
  uniqueSlug: '',
  colors: colors, // to be used later
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

const adjustedTheme = (ancestorTheme, updatedColors) => ({
  ...ancestorTheme,
  colors: updatedColors,
  gradients: updateGradients(updatedColors),
});

// get help details/logo/colors
const PublicOrgProvider = (props) => {
  const { org: uniqueSlug } = useParams();
  const [publicOrg, setPublicOrg] = useState(initialPublicOrgState);

  const _setPublicOrg = (data) => {
    // set org in state
    setPublicOrg(data);
  };

  const updatedColors = ({ main, secondary }) => {
    if (!main || !secondary) {
      return colors;
    }

    const updated = {
      ...colors,
      primaryMain: formatColor(main),
      primaryMid: formatColor(setColor('primary', main).mid),
      primaryLight: formatColor(setColor('primary', main).light),
      secondaryMain: formatColor(secondary),
      secondaryMid: formatColor(setColor('secondary', secondary).mid),
      secondaryLight: formatColor(setColor('secondary', secondary).light),
      error: formatColor(main),
      borderPrimary: formatColor(main),
    };

    return updated;
  };

  const getPublicOrgInfo = async (uniqueSlug) => {
    const { data } = await Organisations.getOrganisationByUniqueSlug({
      uniqueSlug,
    });

    if (data) {
      _setPublicOrg({ ...data, colors: updatedColors(data.colors) });
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

  return (
    <ThemeProvider theme={(theme) => adjustedTheme(theme, publicOrg.colors)}>
      <PublicOrgContext.Provider value={value} {...props} />
    </ThemeProvider>
  );
};

const usePublicOrg = () => {
  const value = useContext(PublicOrgContext);
  return value;
};

export { PublicOrgProvider, usePublicOrg };
export default PublicOrgContext;
