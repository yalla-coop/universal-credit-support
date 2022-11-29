const updateGradients = (updatedColors, useBlockColors) => {
  return {
    primary: useBlockColors
      ? updatedColors.primaryMain
      : `linear-gradient(90deg, ${updatedColors.primaryMain} 0%, ${updatedColors.primaryMid} 98.89%)`,
    secondary: useBlockColors
      ? updatedColors.secondaryMain
      : `linear-gradient(90deg, ${updatedColors.secondaryMain} 0%, ${updatedColors.secondaryMid} 98.89%)`,
  };
};

export default updateGradients;
