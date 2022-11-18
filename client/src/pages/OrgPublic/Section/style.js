import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 898px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const Topics = styled.div`
  width: 60%;
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

export const HelpSection = styled.div`
  width: 33%;
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacings[7]};
  }
`;
