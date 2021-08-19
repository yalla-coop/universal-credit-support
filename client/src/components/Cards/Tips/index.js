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
const getColor = (index, startingColor) => {
  const _index = (index + startingColor) % colorArray.length;
  return colorArray[_index];
};

const Tips = ({ tips = [], startingColor = 0, ...props }) => {
  return (
    <S.Section {...props}>
      {tips.map((tip, index) => (
        <S.Tip key={index} color={getColor(index, startingColor)} mb="3">
          <Icon
            icon="bulb"
            color={getColor(index, startingColor).icon}
            mr="2"
          />
          {typeof tip === 'string' ? (
            <T.H3 color={getColor(index, startingColor).text}>{tip}</T.H3>
          ) : (
            tip
          )}
        </S.Tip>
      ))}
    </S.Section>
  );
};

export default Tips;
