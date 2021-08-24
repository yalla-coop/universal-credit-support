import { navRoutes as n } from '../../constants';
import { Grid, Typography as T, Button, TextWithIcon } from '../../components';

const { Row, Col } = Grid;

const Welcome2 = () => {
  return (
    <>
      <Row mt="8">
        <Col w={[4, 11, 7]}>
          <T.H1>Welcome to the Universal Credit Tool!</T.H1>
        </Col>
      </Row>
      <Row mt="6">
        <Col w={[4, 11, 7]}>
          <T.P>
            We have made this tool completely free to use. All you need to do is
            create an account.
          </T.P>
        </Col>
      </Row>
      <Row mt="4">
        <Col w={[4, 11, 7]}>
          <T.P>
            You will be able to customise the colours in the tool, add your logo
            and add any specific contact details for your customers
          </T.P>
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 11, 6]}>
          <TextWithIcon
            to={n.EXTERNAL.DEMO_VIDEO}
            external
            underline
            text="View demo video"
            icon="open"
            iconColor="primaryMain"
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 11, 6]}>
          <Button text="Sign up" variant="primary" to={n.ADMIN.SIGNUP} />
        </Col>
      </Row>
    </>
  );
};

export default Welcome2;
