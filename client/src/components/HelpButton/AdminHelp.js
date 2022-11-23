import { Typography as T, TextWithIcon } from '../index';
import * as R from '../../constants/nav-routes';
import * as S from './style';

const AdminHelp = () => {
  return (
    <S.AdminHelpWrapper>
      <T.P color="neutralDark" mb="43px">
        We all need to speak to someone sometimes! Use any of the contact
        details below to find a person to chat with.
      </T.P>
      <T.P color="neutralDark" mb="6">
        Please click the link below to access FAQs, guides and also information
        on how to raise any issues for the administrators
      </T.P>
      <TextWithIcon
        iconColor="primaryMain"
        to={R.EXTERNAL.PRODUCT_SUPPORT}
        icon="open"
        text="Go to Product Support"
        external
        underline
      />
    </S.AdminHelpWrapper>
  );
};

export default AdminHelp;
