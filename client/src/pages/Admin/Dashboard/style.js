import styled from '@emotion/styled';

export const LinkWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralSurface};
  display: flex;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacings[3]};
  margin-top: ${({ theme }) => theme.spacings[7]};
  margin-bottom: ${({ theme }) => theme.spacings[7]};
  padding-left: ${({ theme }) => theme.spacings[5]};
  width: 100%;

  ${({ theme }) => theme.media.mobile} {
    margin-top: ${({ theme }) => theme.spacings[5]};
    margin-bottom: ${({ theme }) => theme.spacings[5]};
  }
`;

export const CardWrapper = styled.div`
  max-width: 300px;
  margin-top: ${({ theme }) => theme.spacings[7]};
`;

export const AnalysisCardsWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacings[6]};
  flex-direction: column;
`;

export const AnalysisCard = styled.div`
  padding: ${({ theme }) => theme.spacings[6]};
  background: ${({ theme, bgColor }) => theme.colors[bgColor]};
  min-height: 176px;
`;
