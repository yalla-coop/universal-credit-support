import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding: 60px;
  background: ${({ theme, bgColor = 'secondaryMain' }) =>
    theme.colors[bgColor]};
  padding: 8px;
  min-height: 180px;
  display: flex;
`;
export const Border = styled.div`
  border: ${({ theme, borderColor = 'white' }) =>
    `3px solid ${theme.colors[borderColor]}`};
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 44px;
  padding-bottom: 44px;
  ${({ theme }) => theme.media.tablet} {
    justify-content: center;
  }
`;

export const markDownContainer = styled.div`
  margin-left: 11.94vw;
  flex-basis: 100%;
  div {
    font-size: 2rem !important;
    line-height: 44px !important;
    font-style: italic !important;
  }

  strong {
    font-weight: 700;
    font-style: normal !important;
  }
  ${({ theme }) => theme.media.tablet} {
    flex-basis: max-content;

    margin-left: 0;
    div {
      font-size: 1.5rem !important;
      line-height: 33.5px !important;
      text-align: center !important;
    }

    strong {
      display: block !important;
    }
  }
`;
