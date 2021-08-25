import { useState, useEffect } from 'react';

import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';

import { contactLinksTypes as cType } from '../../constants/data-types';

import { Organisations } from '../../api-calls';

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
  orgLink,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [orgDetails, setOrgDetails] = useState([]);

  const handleClose = () => {
    setIsOpen(false);
    if (parentFunc) {
      parentFunc(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await Organisations.getHelpDetails({
        orgLink,
      });
      if (error) {
        console.error(error);
      }
      setOrgDetails(data);
    }
    if (orgLink) {
      fetchData();
    }
  }, [isOpen, orgLink]);

  if (isOpen || parentState)
    return (
      <S.Modal {...props}>
        <S.Header>
          <T.H3 color="white">Help is here!</T.H3>
          <S.CloseButton onClick={handleClose}>
            <Icon icon="close" color="white" />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          <T.P color="neutralDark" mb="6">
            We all need to speak to someone sometimes! Use any of the contact
            details below to find a person to chat with.
          </T.P>
          {orgDetails?.map((contact) => (
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
            <T.H3 color="neutralMain">Government Helpline</T.H3>
            <T.P color="neutralDark" isSmall>
              Available 24/7
            </T.P>
            <T.Link
              external
              weight="bold"
              color="secondaryMain"
              isSmall
              to={formatLink('PHONE', { phone: '02071231234' })}
            >
              020 7123 1234
            </T.Link>
          </S.ContactItem>
        </S.Content>
      </S.Modal>
    );

  return (
    <S.Button position={position} onClick={() => setIsOpen(true)}>
      <T.H3 color="white">Help me!</T.H3>
    </S.Button>
  );
};

export default HelpButton;
