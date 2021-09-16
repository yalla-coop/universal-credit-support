const updateGradients = (updatedColors) => {
  console.log('UPDA', updatedColors);
  return {
    primary: `linear-gradient(90deg, ${updatedColors.primaryMain} 0%, ${updatedColors.primaryMid} 98.89%)`,
    secondary: `linear-gradient(90deg, ${updatedColors.secondaryMain} 0%, ${updatedColors.secondaryMid} 98.89%)`,
  };
};

export default updateGradients;
