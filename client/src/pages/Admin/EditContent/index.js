import {
  Typography as T,
  Grid,
  TextWithIcon,
  Cards as C,
} from '../../../components';
import { navRoutes as R } from '../../../constants';

const { Col, Row } = Grid;

const EditContent = () => {
  return (
    <>
      <Row jc="space-between" mb="7">
        <Col w={[4, 12, 7]}>
          <T.H1 mtM="5" style={{ width: '100%' }}>
            Edit content
          </T.H1>
        </Col>
      </Row>
      <Row style={{ maxWidth: '700px' }}>
        <Col w={[4, 12, 7]}>
          <C.Tips
            tips={[
              <T.H3 color="secondaryMain">
                Remember! This will change the main content of the tool, for
                every organisation using it. Please double check any new
                information and always keep the content style supportive. Read
                out content guide here
              </T.H3>,
            ]}
            startingColor={1}
          />
        </Col>
        <Col w={[4, 12, 5]} style={{ paddingLeft: '30px' }}>
          <TextWithIcon
            to={R.SUPER_ADMIN.EDIT_LANDING_PAGE}
            text="Edit landing page content"
            m={{ mtT: 7 }}
            iconProps={{
              color: 'primaryDark',
              icon: 'forwardArrow',
            }}
          />
          <TextWithIcon
            to={R.SUPER_ADMIN.MANAGE_STEPS}
            text="Manage steps "
            m={{ mt: 4 }}
            iconProps={{
              color: 'primaryDark',
              icon: 'forwardArrow',
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default EditContent;
