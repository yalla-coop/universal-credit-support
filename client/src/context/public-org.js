import { useEffect, createContext, useState, useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import formatColor from '../helpers/format-color';
import { Organisations } from '../api-calls';
import { matchPath, useLocation, Outlet } from 'react-router-dom';

import colors, { defaultColors } from '../theme/colors';
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
  pageTitle: '',
  setPageTitle: () => {},
});

const adjustedTheme = (ancestorTheme, updatedColors) => ({
  ...ancestorTheme,
  colors: updatedColors,
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
  const [pageTitle, setPageTitle] = useState('');

  const _setPublicOrg = (data) => {
    // set org in state
    setPublicOrg(data);
  };

  const updatedColors = ({
    mainHeaderBgColor,
    section1BgColor,
    section2BgColor,
    section3BgColor,
    section4BgColor,
    section5BgColor,
    section1TextColor,
    section2TextColor,
    section3TextColor,
    section4TextColor,
    section5TextColor,
  }) => {
    const updated = {
      ...colors,
      mainHeaderBgColor: mainHeaderBgColor && formatColor(mainHeaderBgColor),
      section1BgColor: section1BgColor && formatColor(section1BgColor),
      section2BgColor: section2BgColor && formatColor(section2BgColor),
      section3BgColor: section3BgColor && formatColor(section3BgColor),
      section4BgColor: section4BgColor && formatColor(section4BgColor),
      section5BgColor: section5BgColor && formatColor(section5BgColor),
      section1TextColor: section1TextColor && formatColor(section1TextColor),
      section2TextColor: section2TextColor && formatColor(section2TextColor),
      section3TextColor: section3TextColor && formatColor(section3TextColor),
      section4TextColor: section4TextColor && formatColor(section4TextColor),
      section5TextColor: section5TextColor && formatColor(section5TextColor),
    };
    return updated;
  };

  const getPublicOrgInfo = async (uniqueSlug) => {
    const { data } = await Organisations.getOrganisationByUniqueSlug({
      uniqueSlug,
    });

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
    pageTitle,
    setPageTitle,
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
