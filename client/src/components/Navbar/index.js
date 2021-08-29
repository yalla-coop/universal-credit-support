import { useState, useEffect } from 'react';

import NavRoutes from './NavRoutes';

import * as S from './style';
import Icon from '../Icon';
import { ADMIN, GENERAL } from '../../constants/nav-routes';
import { Organisations } from '../../api-calls';
import { useAuth } from '../../context/auth';

// import { ReactComponent as MobileLogo } from '../assets/MobileLogo.svg';
// import { ReactComponent as DesktopLogo } from '../assets/DesktopLogo.svg';
import YallaLogo from '../assets/YallaLogo.png';

const NavItems = ({ setOpen, ...props }) => {
  return (
    <S.Div>
      <NavRoutes setOpen={setOpen} />
    </S.Div>
  );
};

export const DesktopNav = () => {
  const { user } = useAuth();
  const [orgDetails, setOrgDetails] = useState({ logUrl: '' });

  useEffect(() => {
    const getData = async () => {
      const { error, data } = await Organisations.getOrganisation({
        id: user.organisationId,
      });
      setOrgDetails(data);
    };

    getData();
  }, [user.organisationId]);

  return (
    <S.DesktopContainer>
      <S.LogoLink to={ADMIN.DASHBOARD}>
        <S.LogoImg src={orgDetails.logUrl} alt="logo" />
      </S.LogoLink>
      <NavItems />
    </S.DesktopContainer>
  );
};

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <S.MobileContainer>
      <Icon icon="menu" width={33} height={33} onClick={() => setOpen(true)} />
      <S.Drawer
        title="Basic Drawer"
        placement={'right'}
        closable={false}
        visible={open}
        key={'placement'}
        maskStyle={{ display: 'none' }}
        headerStyle={{ display: 'none' }}
        width="100%"
        drawerStyle={{ background: 'white', display: 'flex' }}
      >
        <Icon
          icon="close"
          width={18}
          height={18}
          onClick={() => setOpen(false)}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
            zIndex: 2,
          }}
        />
        <div style={{ marginTop: -24 }}>
          <S.LogoLink to={GENERAL.HOME}>
            <img src={YallaLogo} alt="logo" />
          </S.LogoLink>
          <NavItems setOpen={setOpen} />
        </div>
      </S.Drawer>
    </S.MobileContainer>
  );
};
