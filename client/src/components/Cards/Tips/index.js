import * as S from './style';
import * as T from '../../Typography';
import Icon from '../../Icon';

const colorArray = [
  {
    bg: 'neutralSurface',
    border: 'neutralMid',
    text: 'neutralMain',
    icon: 'neutralMid',
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
const getColor = (index) => {
  const _index = index % colorArray.length;
  return colorArray[_index];
};

const Tips = ({ tips = [] }) => {
  return (
    <>
      {tips.map((tip, index) => (
        <S.Section key={index} color={getColor(index)} mb="3">
          <Icon icon="bulb" color={getColor(index).icon} mr="2" />
          {typeof tip === 'string' ? (
            <T.H3 color={getColor(index).text}>{tip}</T.H3>
          ) : (
            tip
          )}
        </S.Section>
      ))}
    </>
  );
};

export default Tips;
