import { useState } from 'react';

import NavRoutes from './NavRoutes';

import * as S from './style';
import Icon from '../Icon';
import { ADMIN, GENERAL } from '../../constants/nav-routes';

import { useAdminOrg } from '../../context/admin-org';
import { usePublicOrg } from '../../context/public-org';
import { useAuth } from '../../context/auth';
import Logo from '../assets/Logo.png';

const NavItems = ({ setOpen, ...props }) => {
  return (
    <S.Div>
      <NavRoutes setOpen={setOpen} />
    </S.Div>
  );
};

export const DesktopNav = () => {
  const { adminOrg } = useAdminOrg();

  return (
    <S.DesktopContainer>
      <S.LogoLink to={ADMIN.DASHBOARD}>
        <S.LogoImg src={adminOrg.logoUrl || Logo} alt="logo" />
      </S.LogoLink>
      <NavItems />
    </S.DesktopContainer>
  );
};

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { adminOrg } = useAdminOrg();
  const { user } = useAuth();
  const { publicOrg } = usePublicOrg();

  const logoUrl = adminOrg?.logoUrl || publicOrg?.logoUrl;
  const logoLink = user.id ? ADMIN.DASHBOARD : GENERAL.HOME;

  return (
    <S.MobileContainer>
      <S.LogoLink to={logoLink} onClick={() => setOpen(false)}>
        {logoUrl && <S.LogoImg src={logoUrl} alt="logo" />}
      </S.LogoLink>
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <S.LogoLink to={logoLink}>
              {logoUrl && (
                <S.LogoImg
                  src={logoUrl}
                  alt="logo"
                  onClick={() => setOpen(false)}
                />
              )}
            </S.LogoLink>
          </div>
          <Icon
            icon="close"
            width={18}
            height={18}
            onClick={() => setOpen(false)}
          />
        </div>
        <NavItems setOpen={setOpen} />
      </S.Drawer>
    </S.MobileContainer>
  );
};
