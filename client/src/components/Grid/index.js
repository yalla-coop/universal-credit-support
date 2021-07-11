import * as S from './style';
import PropTypes from 'prop-types';

const Col = ({ w = [], children, display = 'flex', ...props }) => (
  <S.Col c1={w[0]} c2={w[1]} c3={w[2]} display={display} {...props}>
    {children}
  </S.Col>
);

const Row = ({ jc, jcT, jcM, children, inner, ...props }) => (
  <div>
    <S.Row jc={jc} jcT={jcT} jcM={jcM} inner={inner} {...props}>
      {children}
    </S.Row>
  </div>
);

Row.propTypes = {
  jc: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
};

export { Row, Col };
