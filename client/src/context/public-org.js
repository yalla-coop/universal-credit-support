import { useEffect, createContext, useState, useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Organisations } from '../api-calls';
import { matchPath, useLocation, Outlet } from 'react-router-dom';

import setColor from '../helpers/set-color-variations';
import formatColor from '../helpers/format-color';
import updateGradients from '../helpers/update-gradients';
import colors from '../theme/colors';
import { PUBLIC_ORG } from './../constants/nav-routes';
import { defaultResources } from '../constants/resources';

const initialPublicOrgState = {
  id: null,
  logoUrl: '',
  uniqueSlug: '',
  colors: colors,
  organisationName: '',
  resources: [],
};

const PublicOrgContext = createContext({
  publicOrg: initialPublicOrgState,
  setPublicOrg: () => {},
  logout: () => {},
  uniqueSlug: '',
});

const adjustedTheme = (ancestorTheme, updatedColors) => ({
  ...ancestorTheme,
  colors: updatedColors,
  gradients: updateGradients(updatedColors),
});

// get help details/logo/colors
const PublicOrg = (props) => {
  const location = useLocation();
  const match = matchPath(
    { path: `${PUBLIC_ORG.HOME_ORG}/*`, exact: false, strict: false },
    location.pathname
  );
  let { uniqueSlug } = match?.params || {};
  uniqueSlug = uniqueSlug || 'hyde';
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

    const defaultColors = {
      main: colors.primaryMainObj,
      secondary: colors.secondaryMainObj,
    };

    if (data) {
      _setPublicOrg({
        ...data,
        resources: defaultResources.map((r) => {
          const resource = data?.resources?.find((res) => res.key === r.key);
          return resource || r;
        }),
        colors: updatedColors(data.colors || defaultColors),
      });
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
    uniqueSlug,
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

const PublicOrgProvider = () => {
  return (
    <PublicOrg>
      <Outlet />
    </PublicOrg>
  );
};

export { PublicOrgProvider, usePublicOrg };
export default PublicOrgContext;
