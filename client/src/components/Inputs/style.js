// COMMON INPUT STYLES
import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

const commonStyle = `
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
`;

export const commonBorderStyle = ({ theme, error, disabled }) => `
  border: ${error ? theme.borders.error : theme.borders.inputs};
  border-radius: ${theme.borders.radius};
`;

export const placeholderStyle = ({ theme }) => `
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    ${commonStyle};
    font-family: 'Heebo', sans-serif;
    color: ${theme.colors.neutralDark};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    ${commonStyle};
    font-family: 'Heebo', sans-serif;
    color: ${theme.colors.neutralDark};
  }
  :-ms-input-placeholder { /* IE 10+ */
    ${commonStyle};
    font-family: 'Heebo', sans-serif;
    color: ${theme.colors.neutralDark};
  }
  :-moz-placeholder { /* Firefox 18- */
    ${commonStyle};
    font-family: 'Heebo', sans-serif;
    color: ${theme.colors.neutralDark};
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
