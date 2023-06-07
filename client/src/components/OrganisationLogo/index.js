import styled from '@emotion/styled';

const LogoImg = styled.img`
  width: auto;
  height: 100%;
  max-height: 80px;

  ${({ theme }) => theme.media.tablet} {
    max-height: 70px;
  }

  ${({ theme }) => theme.media.mobile} {
    max-height: 60px;
  }

  padding: ${({ theme: { spacings } }) => `${spacings[1]} 0`};
`;

const OrganisationLogo = ({ logoUrl }) => {
  return logoUrl ? <LogoImg src={logoUrl} alt="logo" /> : null;
};

export default OrganisationLogo;
