import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 164px;
  gap: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutralSurface};
  ${({ theme }) => theme.media.tablet} {
    justify-content: center;
    padding: 16px 24px;
  }
`;

export const SocialImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 6.66667px;
  margin-right: ${({ mr }) => mr || '6px'};
  cursor: pointer;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
