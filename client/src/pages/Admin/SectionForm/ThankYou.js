import { Grid, Typography as T, Button } from '../../../components';

import { navRoutes } from '../../../constants';

const { Row, Col } = Grid;

const SectionFormThankYou = () => {
  return (
    <>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb="6" weight="bold">
            Thank you!
          </T.H1>
        </Col>
        <Col w={[4, 12, 10]}>
          <T.P isSmall color="neutralDark" mb={6}>
            Your new section is under review and will appear on your tool when
            it is approved!
          </T.P>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 6]}>
          <Button
            text={'Edit content'}
            to={navRoutes.ADMIN.ADD_UPDATE_CONTENT}
          />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 6]}>
          <Button
            text="Back to dashboard"
            variant="secondary"
            to={navRoutes.ADMIN.DASHBOARD}
            mt={2}
          />
        </Col>
      </Row>
    </>
  );
};

export default SectionFormThankYou;
