import styled from '@emotion/styled';

const LogoImg = styled.img`
  width: auto;
  height: 100%;
  max-height: 80px;
  max-width: 100px;

  ${({ theme }) => theme.media.tablet} {
    // padding-bottom: 50px;
    max-height: 70px;
    max-width: 90px;
  }

  ${({ theme }) => theme.media.mobile} {
    // padding-bottom: 50px;
    max-height: 60px;
    max-width: 80px;
  }

  padding: ${({ theme: { spacings } }) => `${spacings[1]} 0`};
`;

const OrganisationLogo = ({ logoUrl }) => {
  return logoUrl ? <LogoImg src={logoUrl} alt="logo" /> : null;
};

export default OrganisationLogo;
