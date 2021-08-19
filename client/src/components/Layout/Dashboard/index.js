import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as MobileLogo } from '../../assets/MobileLogo.svg';
import { ReactComponent as DesktopLogo } from '../../assets/DesktopLogo.svg';
import { useMediaQuery } from 'react-responsive';
import { DesktopNav, MobileNav } from '../../Navbar';

import theme from '../../../theme';

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
  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.tablet})`,
  });
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <S.Link to="/" showColorOnMobile={showColorOnMobile}>
            {isTablet ? <MobileLogo /> : <DesktopLogo />}
          </S.Link>
          {showMobileMenu && <MobileNav />}
        </div>
        {children}
      </S.ContentHalf>
    </S.Main>
  );
};

SplitScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SplitScreen;
