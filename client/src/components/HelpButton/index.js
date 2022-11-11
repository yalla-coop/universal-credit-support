import { useState } from 'react';

import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';
import { linkTypes as cType } from '../../constants/data-types';
import { usePublicOrg } from '../../context/public-org';
import { useTranslation, Trans } from 'react-i18next';

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
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { publicOrg } = usePublicOrg();
  const { i18n } = useTranslation();
  const handleClose = () => {
    setIsOpen(false);
    if (parentFunc) {
      parentFunc(false);
    }
  };

  if (isOpen || parentState)
    return (
      <S.Modal {...props}>
        <S.Header>
          <T.H3 color="white">
            <Trans i18nKey="section.helpMe.subtitle">Help is here!</Trans>
          </T.H3>
          <S.CloseButton onClick={handleClose}>
            <Icon icon="close" color="white" />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          <T.P color="neutralDark" mb="6">
            <Trans i18nKey="section.helpMe.description">
              We all need to speak to someone sometimes! Use any of the contact
              details below to find a person to chat with.
            </Trans>
          </T.P>
          {publicOrg?.contactLinks?.map((contact) => (
            <S.ContactItem mb="5">
              <T.H3 color="neutralMain">{contact.description}</T.H3>
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
              <Trans i18nKey="section.helpMe.govHelpline">
                Government Helpline
              </Trans>
            </T.H3>
            <T.P color="neutralDark" isSmall>
              <Trans i18nKey="section.helpMe.govOpeningTimes">
                Monday to Friday, 8am to 6pm
              </Trans>
            </T.P>
            <T.Link
              external
              weight="bold"
              color="secondaryMain"
              isSmall
              to={formatLink('PHONE', { phoneNumber: '02071231234' }).link}
            >
              <Trans i18nKey="section.helpMe.govPhone">
                0800 328 5644 (choose Option 3)
              </Trans>
            </T.Link>
          </S.ContactItem>
        </S.Content>
      </S.Modal>
    );

  return (
    <S.Button position={position} onClick={() => setIsOpen(true)}>
      <T.H3 color="white">
        <Trans i18nKey="section.helpMe.title">Help me!</Trans>
      </T.H3>
    </S.Button>
  );
};

export default HelpButton;
