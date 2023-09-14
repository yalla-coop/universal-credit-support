import SingleTip from './SingleTip';

const colorArray = [
  {
    bg: 'secondaryMain',
    border: 'white',
    text: 'white',
    icon: 'white',
  },
  {
    bg: 'secondaryLight',
    border: 'secondaryMain',
    text: 'secondaryMain',
    icon: 'secondaryMain',
  },
  {
    bg: 'primaryLight',
    border: 'primaryMain',
    text: 'neutralMain',
    icon: 'primaryMain',
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

const Tips = ({
  tips = [],
  startingColor = 0,
  cols,
  inner,
  indexShift,
  ...props
}) => {
  const _tips = tips?.length ? tips : [];

  return _tips
    .filter((t) => !!t)
    .map((tip, i) => {
      const index = i + (indexShift || 0);
      return (
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
      );
    });
};

export { SingleTip };

export default Tips;
