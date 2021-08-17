import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const CardWrapper = styled.div`
  ${setMargin};
  width: 100%;
  padding: ${({ theme }) => `${theme.spacings[3]} ${theme.spacings[4]}`};
  display: flex;
  border-radius: ${({ theme }) => theme.borders.radius};

  position: relative;
  box-sizing: border-box;

  border: 1px;
  color: #fff;
  background: white;
  background-clip: padding-box;
  border: dashed 1px transparent;

  border-style: dashed;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    border-style: inherit;
    background: ${({ theme, noBorder }) =>
      noBorder ? 'none' : theme.gradients.lightBlue};
  }
`;

export const IconWrapper = styled.div`
  min-width: 24px;
`;

export const Content = styled.div`
  padding-left: ${({ theme }) => theme.spacings[3]};
`;
