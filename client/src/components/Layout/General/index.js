import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { usePublicOrg } from '../../../context/public-org';
import { useAdminOrg } from '../../../context/admin-org';
import { OrganisationLogo } from '../../../components';
import Language from '../../Language';

// import Navbar from '../../Navbar';
import GoBack from '../../GoBack';
import theme from '../../../theme';

const General = ({ children, goBack, maxWidth, showHelp, ...props }) => {
  const { publicOrg } = usePublicOrg();
  const { adminOrg } = useAdminOrg();

  return (
    <S.Container>
      <Language />
      <OrganisationLogo logoUrl={adminOrg?.logoUrl || publicOrg?.logoUrl} />
      {/* <S.LangButton>
            <T.P isSmall weight="bold" mr="4px">
              EN
            </T.P>
            <img src={EnglishLang} alt="language" />
          </S.LangButton> */}
      {/* <Navbar /> */}
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
      footer goes here
    </S.Container>
  );
};

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
