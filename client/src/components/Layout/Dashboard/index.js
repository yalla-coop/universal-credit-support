import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

import { DesktopNav } from '../../Navbar';
import { OrganisationLogo } from '../../../components';

import { usePublicOrg } from '../../../context/public-org';

const SplitScreen = ({
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
      <S.ContentHalf>
        <OrganisationLogo logoUrl={publicOrg?.logoUrl} />
        {children}
      </S.ContentHalf>
    </S.Main>
  );
};

SplitScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SplitScreen;
