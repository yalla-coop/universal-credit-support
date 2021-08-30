import { useState } from 'react';

import NavRoutes from './NavRoutes';

import * as S from './style';
import Icon from '../Icon';
import { ADMIN, GENERAL } from '../../constants/nav-routes';

import { useAdminOrg } from '../../context/admin-org';

const NavItems = ({ setOpen, ...props }) => {
  return (
    <S.Div>
      <NavRoutes setOpen={setOpen} />
    </S.Div>
  );
};

export const DesktopNav = () => {
  const { org } = useAdminOrg();

  return (
    <S.DesktopContainer>
      <S.LogoLink to={ADMIN.DASHBOARD}>
        {org?.logoUrl && <S.LogoImg src={org.logoUrl} alt="logo" />}
      </S.LogoLink>
      <NavItems />
    </S.DesktopContainer>
  );
};

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { org } = useAdminOrg();

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
            {org?.logoUrl && <S.LogoImg src={org.logoUrl} alt="logo" />}
          </S.LogoLink>
          <NavItems setOpen={setOpen} />
        </div>
      </S.Drawer>
    </S.MobileContainer>
  );
};
