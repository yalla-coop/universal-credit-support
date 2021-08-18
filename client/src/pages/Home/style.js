import styled from '@emotion/styled';

export const PageHead = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.primary};
  padding-top: ${({ theme: { spacings } }) => spacings[11]};
  padding-bottom: ${({ theme: { spacings } }) => spacings[8]}};

  ${({ theme }) => theme.media.mobile} {
    padding-top: ${({ theme: { spacings } }) => spacings[10]};
    padding-bottom: ${({ theme: { spacings } }) => spacings[7]}};
    justify-content: flex-start;
  };
`;

export const HeaderText = styled.div`
  background: ${({ theme: { colors } }) => `${colors.neutralMain}CC`};
  background-opacity: 0.8;
  border-radius: 8px;
  max-width: 80%;
  padding: ${({ theme: { spacings } }) => spacings[6]}};
  
`;
