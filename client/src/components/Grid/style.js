import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Row = styled.div`
  ${setMargin}
  display: flex;
  flex-wrap: wrap;
  margin-left: -${({ inner, theme }) => (inner ? theme.constants.gridGutter.desktop / 2 : 0)}px !important;
  margin-right: -${({ inner, theme }) => (inner ? theme.constants.gridGutter.desktop / 2 : 0)}px !important;
  width: ${({ inner, theme }) =>
    inner ? `calc(100% + ${theme.constants.gridGutter}px)` : '100%'};
  justify-content: ${({ jc }) => jc || 'flex-start'};
  align-items: ${({ ai }) => ai || 'flex-start'};

  ${({ theme }) => theme.media.tablet} {
    justify-content: ${({ jcT, jc }) => jcT || jc || 'flex-start'};
    margin-left: -${({ inner, theme }) => (inner ? theme.constants.gridGutter.tablet / 2 : 0)}px !important;
    margin-right: -${({ inner, theme }) => (inner ? theme.constants.gridGutter.tablet / 2 : 0)}px !important;
  }
  ${({ theme }) => theme.media.mobile} {
    justify-content: ${({ jcM, jcT, jc }) => jcM || jcT || jc || 'flex-start'};
    margin-left: -${({ inner, theme }) => (inner ? theme.constants.gridGutter.mobile / 2 : 0)}px !important;
    margin-right: -${({ inner, theme }) => (inner ? theme.constants.gridGutter.mobile / 2 : 0)}px !important;
  }
`;

export const Col = styled('div')`
  ${setMargin};
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.constants.gridGutter.desktop / 2}px;
  padding-right: ${({ theme }) => theme.constants.gridGutter.desktop / 2}px;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  min-height: 1;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: ${({ dir }) => dir || 'row'};
  flex-basis: ${({ theme, c3 }) =>
    `calc(${(c3 / theme.constants.columns.desktop) * 100}%)`};
  max-width: ${({ theme, c3 }) =>
    `calc(${(c3 / theme.constants.columns.desktop) * 100}%)`};
  display: ${({ theme, c3, display }) => (c3 ? display : 'none')};
  justify-content: ${({ jc }) => jc || 'flex-start'};
  align-items: ${({ ai }) => ai || 'center'};

  ${({ theme }) => theme.media.tablet} {
    display: ${({ theme, c2, display }) => (c2 ? display : 'none')};
    justify-content: ${({ jcT, jc }) => jcT || jc || 'flex-start'};
    flex-basis: ${({ theme, c2 }) =>
      `calc(${(c2 / theme.constants.columns.tablet) * 100}%)`};
    max-width: ${({ theme, c2 }) =>
      `calc(${(c2 / theme.constants.columns.tablet) * 100}%)`};

    padding-left: ${({ theme }) => theme.constants.gridGutter.tablet / 2}px;
    padding-right: ${({ theme }) => theme.constants.gridGutter.tablet / 2}px;
  }

  ${({ theme }) => theme.media.mobile} {
    display: ${({ theme, c1, display }) => (c1 ? display : 'none')};
    justify-content: ${({ jcM, jcT, jc }) => jcM || jcT || jc || 'flex-start'};
    flex-basis: ${({ theme, c1 }) =>
      `calc(${(c1 / theme.constants.columns.mobile) * 100}%)`};
    max-width: ${({ theme, c1 }) =>
      `calc(${(c1 / theme.constants.columns.mobile) * 100}%)`};
    padding-left: ${({ theme }) => theme.constants.gridGutter.mobile / 2}px;
    padding-right: ${({ theme }) => theme.constants.gridGutter.mobile / 2}px;
  }
`;
