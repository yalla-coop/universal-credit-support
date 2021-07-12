// COMMON INPUT STYLES
import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

const commonStyle = `
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
`;

export const placeholderStyle = ({ theme }) => `
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    ${commonStyle};
    color: ${theme.colors.gray7};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    ${commonStyle};
    color: ${theme.colors.gray7};
  }
  :-ms-input-placeholder { /* IE 10+ */
    ${commonStyle};
    color: ${theme.colors.gray7};
  }
  :-moz-placeholder { /* Firefox 18- */
    ${commonStyle};
    color: ${theme.colors.gray7};
  }
`;

export const Field = styled.div`
  ${setMargin};
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

export const Label = styled.label`
  ${setMargin};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
