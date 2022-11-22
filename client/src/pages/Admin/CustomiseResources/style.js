import styled from '@emotion/styled';
import * as T from '../../../components/Typography';

import { Grid } from '../../../components';
const { Row } = Grid;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 730px;
`;

export const Section = styled(Row)`
  background-color: ${({ theme, bg }) => theme.colors[bg]};
  padding: ${({ theme }) =>
    `${theme.spacings[4]} ${theme.spacings[3]} ${theme.spacings[5]}`};
  margin-bottom: ${({ theme }) => theme.spacings[5]} !important;
  ${({ theme }) => theme.media.tablet} {
    margin-bottom: ${({ theme }) => theme.spacings[5]} !important;
  }
  ${({ theme }) => theme.media.mobile} {
    margin-bottom: ${({ theme }) => theme.spacings[5]} !important;
  }
`;

export const SectionTitle = styled(T.H2)`
  line-height: 50px !important;
`;
