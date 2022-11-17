import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

import { OrganisationLogo } from '../../../components';

import { PUBLIC_ORG } from '../../../constants/nav-routes';
import Logo from '../../../components/assets/Logo.png';

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
  return (
    <S.Main side={side} {...props}>
      <S.ColoredHalf
        gradient={gradient}
        color={color}
        showColorOnMobile={showColorOnMobile}
      />
      <S.ContentHalf>
        <S.Link to={PUBLIC_ORG.HOME} showColorOnMobile={showColorOnMobile}>
          <OrganisationLogo logoUrl={Logo} />
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
