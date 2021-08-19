import { useState } from 'react';

import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';

const formatLink = (type, contact) => {
  switch (type) {
    case 'email':
      return `mailto:${contact}`;
    case 'phone':
      return `tel:${contact}`;
    default:
      return contact;
  }
};

const HelpButton = ({ position = {}, customContacts = [], ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen)
    return (
      <S.Modal {...props}>
        <S.Header>
          <T.H3 color="white">Help is here!</T.H3>
          <S.CloseButton onClick={() => setIsOpen(false)}>
            <Icon icon="close" color="white" />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          <T.P color="neutralDark" mb="6">
            We all need to speak to someone sometimes! Use any of the contact
            details below to find a person to chat with.
          </T.P>
          {customContacts.map(({ title, availability, contact, type }) => (
            <S.ContactItem mb="5">
              <T.H3 color="neutralMain">{title}</T.H3>
              <T.P color="neutralDark" isSmall>
                {availability}
              </T.P>
              <T.Link
                external
                weight="bold"
                color="secondaryMain"
                isSmall
                to={formatLink(type, contact)}
              >
                {contact}
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
              to={formatLink('phone', '02071231234')}
            >
              020 7123 1234
            </T.Link>
          </S.ContactItem>
        </S.Content>
      </S.Modal>
    );

  return (
    <S.Button position={position} onClick={() => setIsOpen(true)}>
      <T.H3 color="white">Help</T.H3>
    </S.Button>
  );
};

export default HelpButton;
