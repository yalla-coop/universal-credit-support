import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as TextLogo } from '../../assets/logo.svg';
import { useMediaQuery } from 'react-responsive';

// import Navbar from '../../Navbar';
import GoBack from '../../GoBack';
import theme from '../../../theme';

const General = ({ children, goBack, maxWidth, ...props }) => {
  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.tablet})`,
  });
  return (
    <>
      <S.Wrapper>
        <S.Header isTablet={isTablet}>
          <S.Link to="/">
            <TextLogo />
          </S.Link>
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
