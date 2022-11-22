import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

import { usePublicOrg } from '../../../context/public-org';
import { useAdminOrg } from '../../../context/admin-org';
import { OrganisationLogo } from '../../../components';

import { GENERAL } from '../../../constants/nav-routes';
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
  const { publicOrg } = usePublicOrg();
  const { adminOrg } = useAdminOrg();

  return (
    <S.Main side={side} {...props}>
      <S.ColoredHalf
        gradient={gradient}
        color={color}
        showColorOnMobile={showColorOnMobile}
      />
      <S.ContentHalf>
        <S.Link to={GENERAL.HOME} showColorOnMobile={showColorOnMobile}>
          <OrganisationLogo
            logoUrl={adminOrg?.logoUrl || publicOrg?.logoUrl || Logo}
          />
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
