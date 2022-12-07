import PropTypes from 'prop-types';
import * as S from './style';
import { useAccessibility } from '../../../context/accessibility';

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
  const { layoutColor } = useAccessibility();

  return (
    <S.Container bgColor={layoutColor}>
      <Language showBack={showBack} />
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
