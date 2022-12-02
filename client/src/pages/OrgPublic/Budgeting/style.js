import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings[3]};
`;

export const TipList = styled.ul`
  ${setMargin};
  color: ${({ color, theme }) => theme.colors[color] || color || 'white'};
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
  }
`;
