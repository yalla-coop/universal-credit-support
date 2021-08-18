import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';
import * as T from '../../components/Typography';

export const PageHead = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.primary};
  padding-top: ${({ theme: { spacings } }) => spacings[11]};
  padding-bottom: ${({ theme: { spacings } }) => spacings[8]};

  ${({ theme }) => theme.media.mobile} {
    padding-top: ${({ theme: { spacings } }) => spacings[10]};
    padding-bottom: ${({ theme: { spacings } }) => spacings[7]}};
    display: flex;
    justify-content: flex-start;
  }
`;

export const HeaderText = styled.div`
  background: ${({ theme: { colors } }) => `${colors.neutralMain}CC`};
  background-opacity: 0.8;
  border-radius: 8px;
  max-width: 580px;
  padding: ${({ theme: { spacings } }) => `${spacings[8]} ${spacings[7]}`};
  margin: 0 auto;

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme: { spacings } }) => spacings[6]};
    border-radius: 0px 8px 8px 0;
    max-width: 90vw;
    margin: 0;
  }
`;

export const Intro = styled.section`
  ${setMargin}
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    max-width: 580px;
    padding: ${({ theme: { spacings } }) =>
      `${spacings[7]} ${spacings[7]} 0 ${spacings[7]}`};
  }
`;

export const StyledText = styled(T.P)`
  max-width: 580px;
  color: ${({ theme: { colors } }) => colors.neutralDark};
  padding: ${({ theme: { spacings } }) => `${spacings[5]} ${spacings[7]}`};
`;

export const Span = styled.span`
  color: ${({ theme: { colors } }) => colors.neutralMain};
`;
