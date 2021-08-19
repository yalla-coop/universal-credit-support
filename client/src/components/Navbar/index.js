import { useState } from 'react';

import NavRoutes from './NavRoutes';

import * as S from './style';
import Icon from '../Icon';
import { GENERAL } from '../../constants/nav-routes';

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

export const DesktopNav = () => (
  <S.DesktopContainer>
    <S.LogoLink to={GENERAL.HOME}>
      {/* <DesktopLogo /> */}
      <img src={YallaLogo} alt="logo" />
    </S.LogoLink>
    <NavItems />
  </S.DesktopContainer>
);

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
          <NavItems setOpen={setOpen} style={{ border: '1px solid red' }} />
        </div>
      </S.Drawer>
    </S.MobileContainer>
  );
};
