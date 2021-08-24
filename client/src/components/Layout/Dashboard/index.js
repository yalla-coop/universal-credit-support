import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as MobileLogo } from '../../assets/MobileLogo.svg';
import { useMediaQuery } from 'react-responsive';
import { DesktopNav, MobileNav } from '../../Navbar';
import { GENERAL } from '../../../constants/nav-routes';

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
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.mobile})`,
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
        {isMobile && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <S.Link to={GENERAL.HOME} showColorOnMobile={showColorOnMobile}>
              <MobileLogo />
            </S.Link>
            {showMobileMenu && <MobileNav />}
          </div>
        )}
        {children}
      </S.ContentHalf>
    </S.Main>
  );
};

SplitScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SplitScreen;
