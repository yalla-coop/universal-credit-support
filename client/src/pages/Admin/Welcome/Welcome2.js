import { navRoutes as n } from '../../../constants';
import {
  Grid,
  Typography as T,
  Button,
  TextWithIcon,
} from '../../../components';

const { Row, Col } = Grid;

const Welcome2 = () => {
  return (
    <>
      <Row mt="8">
        <Col w={[4, 11, 7]}>
          <T.H1>Welcome on board!</T.H1>
        </Col>
      </Row>
      <Row mt="6">
        <Col w={[4, 11, 7]}>
          <T.P>
            We have made this tool completely free to use. All you need to do is
            create an account.
          </T.P>

          <T.P mt="4">
            You will be able to customise the colours in the tool, add your logo
            and add any specific contact details for your customers
          </T.P>

          <T.P mt="4">
            Click on the link below to start the registration process- you are a
            few minutes away from having your very own branded UC application
            tool to share with your customers or clients.
          </T.P>
          <T.P mt="4">
            At the end of the registration process you will have created a
            unique link to the tool for your organisation, which you can share
            with your customers and clients on your webpage, in text messages or
            on social media.
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
