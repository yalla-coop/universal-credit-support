import React from 'react';
import * as S from './style';

import { DesktopNav, MobileNav } from '../../Navbar';
import { OrganisationLogo } from '../../../components';

import { usePublicOrg } from '../../../context/public-org';

const Dashboard = ({
  children,
  goBack,
  maxWidth,
  side,
  gradient,
  color,
  showColorOnMobile,
  showMobileMenu,
  ...props
}) => {
  const { publicOrg } = usePublicOrg();
  return (
    <S.Main side={side} {...props}>
      <S.MenuWrapper
        gradient={gradient}
        color={color}
        showColorOnMobile={showColorOnMobile}
      >
        <DesktopNav />
      </S.MenuWrapper>

      <MobileNav />
      <S.ContentHalf>
        <S.MaxWidth>
          <OrganisationLogo logoUrl={publicOrg?.logoUrl} />
          {children}
        </S.MaxWidth>
      </S.ContentHalf>
    </S.Main>
  );
};

export default Dashboard;
