import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as MobileLogo } from '../../assets/MobileLogo.svg';
import { ReactComponent as DesktopLogo } from '../../assets/DesktopLogo.svg';
import { useMediaQuery } from 'react-responsive';

import theme from '../../../theme';

const SplitScreen = ({
  children,
  goBack,
  maxWidth,
  side,
  gradient,
  color,
  showColorOnMobile,
  ...props
}) => {
  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.tablet})`,
  });
  return (
    <S.Main side={side} {...props}>
      <S.ColoredHalf
        gradient={gradient}
        color={color}
        showColorOnMobile={showColorOnMobile}
      />
      <S.ContentHalf>
        <S.Link to="/" showColorOnMobile={showColorOnMobile}>
          {isTablet ? <MobileLogo /> : <DesktopLogo />}
        </S.Link>
        {children}
      </S.ContentHalf>
    </S.Main>
  );
};

SplitScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SplitScreen;
