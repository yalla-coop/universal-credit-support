import { Typography as T, Grid } from '../../../components';
import { SingleButton } from '../../../components/ButtonsSection';
import { useNavigate } from 'react-router-dom';
import { navRoutes } from '../../../constants';

const { Row, Col } = Grid;
const colorArray = [
  'secondaryMain',
  'primaryMain',
  'neutralMain',
  'primaryDark',
];
const getColor = (index, startingColor) => {
  const _index = (index + startingColor) % colorArray.length;
  return colorArray[_index];
};

const ContentSection = ({ sections = [], title, mt, allowEdit }) => {
  const navigate = useNavigate();

  const handleEdit = (item) => {
    navigate(navRoutes.ADMIN.SECTION.replace(':id', item.id));
  };

  return (
    <Row mb="5" mt={mt}>
      <Col w={[4, 12, 12]}>
        <T.H2 mb="4">{title}</T.H2>
      </Col>
      {sections.map((item, index) => (
        <Col w={[4, 12, 8]} key={item.id}>
          <SingleButton
            title={item.title}
            iconColor={getColor(index, 0)}
            onClick={() => handleEdit && handleEdit(item)}
            allowEdit={allowEdit}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ContentSection;
