import { navRoutes as n } from '../../../constants';
import { Typography as T, Button } from '../../../components';
import * as S from './style';

const SuccessSignup = () => {
  return (
    <S.Wrapper>
      <T.H1>Success!</T.H1>
      <T.P mt="6" color="neutralDark">
        You’ve successfully created your account. Remember that you can edit the
        details at any time.
      </T.P>
      <T.P mt="5" color="neutralDark">
        Someone from the Cost of Living Helper Team is making sure that your
        account looks OK we’ll let you know by email once we’ve done this.
      </T.P>
      <T.P mt="5" color="neutralDark">
        In the meantime you can customise the content via the dashboard.
      </T.P>
      <S.ButtonWrapper>
        <Button
          text="Go to dashboard"
          variant="primary"
          to={n.ADMIN.DASHBOARD}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default SuccessSignup;
