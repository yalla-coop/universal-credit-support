import { navRoutes as n } from '../../../constants';
import { Grid, Typography as T, Button } from '../../../components';

const { Row, Col } = Grid;

const Welcome1 = () => {
  return (
    <div>
      <Row mt="8">
        <Col w={[4, 11, 7]}>
          <T.H1>Welcome to the Universal Credit Tool!</T.H1>
        </Col>
      </Row>
      <Row mt="6">
        <Col w={[4, 11, 7]}>
          <T.P>
            This app was made to support people whilst applying for Universal
            Credit, including a step by step list, things they need and things
            they’ll need to know
          </T.P>

          <T.P mt="4">
            We have created this tool to help anyone who are applying for
            Universal Credit.
          </T.P>
          <T.P mt="4">
            It provides an easy to use step-by-step guide to the process, with
            check lists and helpful tips along the way.
          </T.P>
          <T.P mt="4">
            If you would like to promote it to your customers or clients, you
            can can customise it with your organsation's logo and colours- it is
            complete free and takes 5-10 minutes to set up.
          </T.P>
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 11, 6]}>
          <Button
            text="I’m interested"
            variant="primary"
            to={n.ADMIN.WELCOME2}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Welcome1;
