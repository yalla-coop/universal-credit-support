import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacings[7]};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacings[4]};
  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacings[4]};
  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const ShowInDesktop = styled.div`
  width: 100%;
  display: block;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;
export const HideInDesktop = styled.div`
  width: 100%;
  display: none;
  ${({ theme }) => theme.media.tablet} {
    display: block;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  border: none !important;
  width: 100%;
  padding: 4px;
  margin-bottom: 8px;
  background: ${({ theme }) => theme.colors.neutralLight};
  border-radius: 16px;
  height: fit-content;
  display: flex;
  align-items: center;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.neutralMain : theme.colors.neutralLight};
  cursor: pointer;

  :hover {
    .ant-typography {
      color: ${({ theme, isActive }) =>
        isActive ? theme.colors.white : theme.colors.primaryMain} !important;
    }
  }

  :focus-within {
    outline-style: solid;
    outline-width: 3px;
    outline-color: ${({ theme }) => theme.colors.primaryMain + '!important'};
    outline-offset: 1px;
  }
`;

export const ColorWrapper = styled.div`
  width: 52px;
  height: 52px;
  background: ${({ theme, bgColor }) => theme.colors[bgColor] || bgColor};
  border-radius: 14px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline-start: 12px;
`;

export const FontInputWrapper = styled.div`
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.neutralMid};
  margin-top: ${({ theme }) => theme.spacings[6]};
  margin-bottom: ${({ theme }) => theme.spacings[6]};
`;
