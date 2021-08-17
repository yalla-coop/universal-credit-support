const rotator = (dir) => {
  switch (dir) {
    case 'left':
      return 'rotate(90deg)';
    case 'right':
      return 'rotate(270deg)';
    case 'up':
      return 'rotate(180deg)';
    default:
      return 'rotate(0deg)';
  }
};

export default rotator;
