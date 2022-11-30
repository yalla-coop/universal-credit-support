import PropTypes from 'prop-types';
import * as S from './style';
import { usePublicOrg } from '../../../context/public-org';
import { useAdminOrg } from '../../../context/admin-org';
import { useAccessibility } from '../../../context/accessibility';

import { OrganisationLogo } from '../../../components';
import Language from '../../Language';
import SocialBanner from '../../../components/SocialBanner';
// import Navbar from '../../Navbar';
import GoBack from '../../GoBack';
import theme from '../../../theme';

const General = ({
  children,
  goBack,
  maxWidth,
  showHelp,
  showBack,
  showSocialBanner,
  ...props
}) => {
  const { publicOrg } = usePublicOrg();
  const { adminOrg } = useAdminOrg();
  const { layoutColor } = useAccessibility();

  return (
    <S.Container bgColor={layoutColor}>
      <Language showBack={showBack} />
      <OrganisationLogo logoUrl={adminOrg?.logoUrl || publicOrg?.logoUrl} />
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
      {showSocialBanner && <SocialBanner />}
    </S.Container>
  );
};

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
