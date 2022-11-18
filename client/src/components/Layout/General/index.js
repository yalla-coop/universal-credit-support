import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as S from './style';
import Button from '../../../components/Button';
import { usePublicOrg } from '../../../context/public-org';
import { useAdminOrg } from '../../../context/admin-org';
import { OrganisationLogo } from '../../../components';
import GoBack from '../../GoBack';
import theme from '../../../theme';
import { types } from '../../../constants';
// import Navbar from '../../Navbar';

const General = ({ children, goBack, maxWidth, showHelp, ...props }) => {
  const { i18n } = useTranslation();
  const { publicOrg } = usePublicOrg();
  const { adminOrg } = useAdminOrg();

  return (
    <S.Container>
      accessability header goes here
      <Button
        handleClick={() => i18n.changeLanguage(types.languageCodes.ENGLISH)}
        text="English"
      />
      <Button
        handleClick={() => i18n.changeLanguage(types.languageCodes.ARABIC)}
        text="Arabic"
      />
      <Button
        handleClick={() => i18n.changeLanguage(types.languageCodes.FRENCH)}
        text="French"
      />
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
      footer goes here
    </S.Container>
  );
};

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
