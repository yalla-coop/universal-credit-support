import { useEffect, createContext, useState, useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Organisations } from '../api-calls';
import { matchPath, useLocation, Outlet } from 'react-router-dom';

import setColor from '../helpers/set-color-variations';
import formatColor from '../helpers/format-color';
import updateGradients from '../helpers/update-gradients';
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

const adjustedTheme = (ancestorTheme, updatedColors, useBlockColors) => ({
  ...ancestorTheme,
  colors: updatedColors,
  gradients: updateGradients(updatedColors, useBlockColors),
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
    primaryBgMain,
    secondaryBgMain,
    tertiaryBgMain,
    quartenaryBgMain,
    quinaryBgMain,
    primaryTextMain,
    secondaryTextMain,
    tertiaryTextMain,
    quartenaryTextMain,
    quinaryTextMain,
  }) => {
    if (
      ![
        primaryBgMain,
        secondaryBgMain,
        tertiaryBgMain,
        quartenaryBgMain,
        quinaryBgMain,
        primaryTextMain,
        secondaryTextMain,
        tertiaryTextMain,
        quartenaryTextMain,
        quinaryTextMain,
      ].every((i) => i)
    ) {
      return colors;
    }

    const updated = {
      ...colors,
      primaryDark: formatColor(setColor('primary', secondaryBgMain).dark),
      primaryMain: formatColor(secondaryBgMain),
      primaryMid: formatColor(setColor('primary', secondaryBgMain).mid),
      primaryLight: formatColor(setColor('primary', secondaryBgMain).light),
      secondaryMain: formatColor(primaryBgMain),
      secondaryMid: formatColor(setColor('secondary', primaryBgMain).mid),
      secondaryLight: formatColor(setColor('secondary', primaryBgMain).light),
      error: formatColor(secondaryBgMain),
      borderPrimary: formatColor(secondaryBgMain),
      primaryBgMain: formatColor(primaryBgMain),
      secondaryBgMain: formatColor(secondaryBgMain),
      tertiaryBgMain: formatColor(tertiaryBgMain),
      quartenaryBgMain: formatColor(quartenaryBgMain),
      quinaryBgMain: formatColor(quinaryBgMain),
      primaryTextMain: formatColor(primaryTextMain),
      secondaryTextMain: formatColor(secondaryTextMain),
      tertiaryTextMain: formatColor(tertiaryTextMain),
      quartenaryTextMain: formatColor(quartenaryTextMain),
      quinaryTextMain: formatColor(quinaryTextMain),
      neutralMain: formatColor(quinaryBgMain),
      neutralMid: formatColor(tertiaryBgMain),
      neutralLight: formatColor(quartenaryBgMain),
      neutralSurface: formatColor(setColor('quinary', quinaryBgMain).Surface),
      tertiaryDark: formatColor(setColor('tertiary', tertiaryBgMain).dark),
      primaryMainObj: secondaryBgMain,
      secondaryMainObj: secondaryBgMain,
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
        useBlockColors: data?.colors?.useBlockColors || false,
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
    <ThemeProvider
      theme={(theme) =>
        adjustedTheme(theme, publicOrg.colors, publicOrg.useBlockColors)
      }
    >
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
