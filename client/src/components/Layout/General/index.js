import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as MobileLogo } from '../../assets/MobileLogo.svg';
import { ReactComponent as DesktopLogo } from '../../assets/DesktopLogo.svg';
import { useMediaQuery } from 'react-responsive';

import * as T from '../../Typography';
// import Navbar from '../../Navbar';
import GoBack from '../../GoBack';
import theme from '../../../theme';

import EnglishLang from '../../assets/EN.png';
import { GENERAL } from '../../../constants/nav-routes';

const General = ({ children, goBack, maxWidth, ...props }) => {
  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.tablet})`,
  });
  return (
    <>
      <S.Wrapper>
        <S.Header isTablet={isTablet}>
          <S.Link to={GENERAL.HOME}>
            {isTablet ? <MobileLogo /> : <DesktopLogo />}
          </S.Link>
          <S.LangButton>
            <T.P isSmall weight="bold" mr="4px">
              EN
            </T.P>
            <img src={EnglishLang} alt="language" />
          </S.LangButton>
          {/* <Navbar /> */}
        </S.Header>
      </S.Wrapper>
      <S.Content maxWidth={maxWidth}>
        {goBack && (
          <GoBack
            mb="6"
            mbM="5"
            ml={`${theme.constants.gridGutter.desktop / 2}px`}
            mlT={`${theme.constants.gridGutter.tablet / 2}px`}
            mlM={`${theme.constants.gridGutter.mobile / 2}px`}
          />
        )}
        {children}
      </S.Content>
    </>
  );
};

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
