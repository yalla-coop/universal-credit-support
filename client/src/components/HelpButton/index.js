import { useState } from 'react';
import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';
import AdminHelp from './AdminHelp';
import { usePublicOrg } from '../../context/public-org';
import { useTranslation } from 'react-i18next';
import { common } from '../../constants';

const HelpButton = ({
  position = {},
  customContacts = [],
  parentState,
  parentFunc,
  uniqueSlug,
  adminHelp,
  ...props
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { publicOrg } = usePublicOrg();
  const handleClose = () => {
    setIsOpen(false);
    if (parentFunc) {
      parentFunc(false);
    }
  };
  const stillNeedHelp = publicOrg?.resources?.find(
    (resource) => resource.key === 'STILL_NEED_HELP'
  );

  if (isOpen || parentState)
    return (
      <S.Modal adminHelp={adminHelp} {...props}>
        <S.Header>
          <T.H3 color="white">
            {adminHelp
              ? t('common.section.helpMe.title', common.section.helpMe.title)
              : t(
                  'common.section.helpMe.subtitle',
                  common.section.helpMe.subtitle
                )}
          </T.H3>
          <S.CloseButton onClick={handleClose}>
            <Icon icon="close" color="white" pointer />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          {adminHelp ? (
            <AdminHelp />
          ) : (
            <>
              <T.P ml="3" color="neutralDark">
                {t(
                  'common.section.stillNeedHelp.subtitle',
                  common.section.stillNeedHelp.subtitle
                )}
                <T.Link
                  weight="bold"
                  external
                  href={`tel:${stillNeedHelp?.value}`}
                  underline={!!stillNeedHelp?.label}
                >
                  {stillNeedHelp?.label || stillNeedHelp?.value}
                </T.Link>{' '}
              </T.P>
            </>
          )}
        </S.Content>
      </S.Modal>
    );

  return (
    <S.Button position={position} onClick={() => setIsOpen(true)}>
      <T.H3 color="white">
        {t('common.section.helpMe.title', common.section.helpMe.title)}
      </T.H3>
    </S.Button>
  );
};

export default HelpButton;
