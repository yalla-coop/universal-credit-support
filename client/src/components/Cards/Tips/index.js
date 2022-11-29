import SingleTip from './SingleTip';

const colorArray = [
  {
    bg: 'secondaryMain',
    border: 'primaryTextMain',
    text: 'primaryTextMain',
    icon: 'primaryTextMain',
  },
  {
    bg: 'secondaryLight',
    border: 'secondaryMain',
    text: 'secondaryMain',
    icon: 'secondaryMain',
  },
  {
    bg: 'primaryLight',
    border: 'primaryDark',
    text: 'neutralMain',
    icon: 'primaryDark',
  },
  {
    bg: 'neutralSurface',
    border: 'neutralMid',
    text: 'neutralMain',
    icon: 'neutralDark',
  },
];

// create function that programmatically cycles through the colorArray in order
const getColor = (index, startingColor) => {
  const _index = (index + startingColor) % colorArray.length;
  return colorArray[_index];
};

const Tips = ({ tips = [], startingColor = 0, cols, inner, ...props }) => {
  return tips
    .filter((t) => !!t)
    .map((tip, index) => (
      <SingleTip
        key={index}
        bgColor={getColor(index, startingColor).bg}
        borderColor={getColor(index, startingColor).border}
        icon={'bulb'}
        iconColor={getColor(index, startingColor).icon}
        tip={tip}
        textColor={getColor(index, startingColor).text}
        mb="3"
        {...props}
      />
    ));
};

export { SingleTip };

export default Tips;
