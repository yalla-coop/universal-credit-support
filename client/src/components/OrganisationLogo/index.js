import styled from '@emotion/styled';

const LogoImg = styled.img`
  max-width: 185px;
  max-height: 80px;
  ${({ theme }) => theme.media.tablet} {
    padding-bottom: 50px;
  }

  padding-bottom: ${({ theme: { spacings } }) => spacings[3]};
`;

const OrganisationLogo = ({ logoUrl }) => {
  return logoUrl ? <LogoImg src={logoUrl} alt="logo" /> : null;
};

export default OrganisationLogo;
