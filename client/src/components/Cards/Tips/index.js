import * as S from './style';
import * as T from '../../Typography';
import Icon from '../../Icon';

import { Row, Col } from '../../Grid';

const colorArray = [
  {
    bg: 'neutralSurface',
    border: 'neutralMid',
    text: 'neutralMain',
    icon: 'neutralDark',
  },
  {
    bg: 'secondaryLight',
    border: 'secondaryMain',
    text: 'secondaryMain',
    icon: 'secondaryMain',
  },
  {
    bg: 'secondaryMain',
    border: 'white',
    text: 'white',
    icon: 'white',
  },
  {
    bg: 'primaryLight',
    border: 'primaryMain',
    text: 'neutralMain',
    icon: 'primaryMain',
  },
];

// create function that programmatically cycles through the colorArray in order
const getColor = (index, startingColor) => {
  const _index = (index + startingColor) % colorArray.length;
  return colorArray[_index];
};

const Tips = ({ tips = [], startingColor = 0, cols, inner, ...props }) => {
  return (
    <Row {...props} inner={inner}>
      {tips
        .filter((t) => !!t)
        .map((tip, index) => (
          <Col w={cols || [4, 12, 12]} key={index} inner>
            <S.Tip key={index} color={getColor(index, startingColor)} mb="3">
              <Icon
                icon="bulb"
                color={getColor(index, startingColor).icon}
                mr="2"
              />
              {typeof tip === 'string' ? (
                <T.H3 color={getColor(index, startingColor).text}>
                  Tip! {tip}
                </T.H3>
              ) : (
                tip
              )}
            </S.Tip>
          </Col>
        ))}
    </Row>
  );
};

export default Tips;
