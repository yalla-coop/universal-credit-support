import { navRoutes as n } from '../../../constants';
import { Typography as T, Button, TextWithIcon } from '../../../components';
import * as S from './style';

const Welcome = () => {
  return (
    <S.Wrapper>
      <T.H1>
        Welcome to the
        <S.BlockSpan>Cost of Living Helper!</S.BlockSpan>
      </T.H1>

      <T.P mt="6" color="neutralDark">
        We have made this tool completely free to use. All you need to do is
        create an account.
      </T.P>
      <T.P mt="5" mb="5" color="neutralDark">
        You will be able to customise the colours in the tool, add your logo and
        add any specific contact details for your clients.
      </T.P>
      <TextWithIcon
        to={n.EXTERNAL.DEMO_VIDEO}
        mr="2"
        text="View demo video"
        weight="medium"
        external
        underline
        iconProps={{
          color: 'primaryDark',
          icon: 'open',
        }}
      />
      <S.ButtonWrapper>
        <Button text="Sign up" variant="primary" to={n.ADMIN.SIGNUP} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Welcome;
