import { useState } from 'react';
import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';
import AdminHelp from './AdminHelp';
import { linkTypes as cType } from '../../constants/data-types';
import { usePublicOrg } from '../../context/public-org';
import { useTranslation } from 'react-i18next';
import { common } from '../../constants';

const formatLink = (type, contact) => {
  switch (type) {
    case cType.EMAIL:
      return { link: `mailto:${contact.email}`, label: contact.email };
    case cType.PHONE:
      return { link: `tel:${contact.phoneNumber}`, label: contact.phoneNumber };
    case cType.WEBCHAT_LINK:
      return { link: contact.link, label: contact.link };
    default:
      return { link: '', label: '' };
  }
};

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
            <Icon icon="close" color="white" />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          {adminHelp ? (
            <AdminHelp />
          ) : (
            <>
              <T.P color="neutralDark" mb="6">
                {t(
                  'common.section.helpMe.description',
                  common.section.helpMe.description
                )}
              </T.P>
              {publicOrg?.contactLinks?.map((contact) => (
                <S.ContactItem mb="5">
                  <T.H3 color="neutralMain">{contact.description}</T.H3>
                  {t('common.section.helpMe.govHelpline', contact.description)}
                  <T.P color="neutralDark" isSmall>
                    {contact.availability}
                  </T.P>
                  <T.Link
                    external
                    weight="bold"
                    color="secondaryMain"
                    isSmall
                    to={formatLink(contact.type, contact).link}
                  >
                    {formatLink(contact.type, contact).label}
                  </T.Link>
                </S.ContactItem>
              ))}
              <S.ContactItem mb="4">
                <T.H3 color="neutralMain">
                  {t(
                    'common.section.helpMe.govHelpline',
                    common.section.helpMe.govHelpline
                  )}
                </T.H3>
                <T.P color="neutralDark" isSmall>
                  {t(
                    'common.section.helpMe.govOpeningTimes',
                    common.section.helpMe.govOpeningTimes
                  )}
                </T.P>
                <T.Link
                  external
                  weight="bold"
                  color="secondaryMain"
                  isSmall
                  to={formatLink('PHONE', { phoneNumber: '02071231234' }).link}
                >
                  {t(
                    'common.section.helpMe.govPhone',
                    common.section.helpMe.govPhone
                  )}
                </T.Link>
              </S.ContactItem>
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
