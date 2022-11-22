import styled from '@emotion/styled';
import { Typography as T } from '../../../components';

export const LinkWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralLight};
  display: flex;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: ${({ theme, mb }) => theme.spacings[mb] || mb};
  padding-left: ${({ theme }) => theme.spacings[5]};
  width: 100%;
`;

export const CardWrapper = styled.div`
  margin-top: 21px;
  width: 100%;
  max-width: 300px;
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

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacings[6]};
  gap: 8px;
`;

export const ButtonWrapper = styled(T.Link)`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  width: 100%;
`;

export const TipsList = styled.div``;
