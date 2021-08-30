import {
  Typography as T,
  Button,
  Grid,
  TextWithIcon,
} from '../../../components';
import { ADMIN } from '../../../constants/nav-routes';

import * as S from './style';

const { Row, Col } = Grid;

function CreateUniqueLinkSuccess({ uniqueSlug }) {
  return (
    <S.Container>
      <Row>
        <Col w={[4, 11, 9]}>
          <T.H1 color="neutralMain" mb={6}>
            Success!
          </T.H1>
          <T.P color="neutralDark" mb={6}>
            You’ve successfully created your account. Remember that you can edit
            the details at any time. Your tool is now ready to be shared with
            your team by sharing your unique link below:
          </T.P>
          <S.LinkWrapper>
            <TextWithIcon
              iconColor="primaryMain"
              to={`${window.location.host}/${uniqueSlug}`}
              icon="open"
              text={`${window.location.host}/${uniqueSlug}`}
              external
              underline
            />
          </S.LinkWrapper>
          <Button
            to={ADMIN.DASHBOARD}
            label="Button"
            text="Return home"
            variant="primary"
          />
        </Col>
      </Row>
    </S.Container>
  );
}

export default CreateUniqueLinkSuccess;
