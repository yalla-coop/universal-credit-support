import { getBenefitCalculator as getBenefitCalculatorUseCase } from '../use-cases';

const getBenefitCalculator = async (req, res, next) => {
  // const { id: userId } = req.user;
  const { uniqueSlug } = req.query;
  try {
    const results = await getBenefitCalculatorUseCase({
      uniqueSlug,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getBenefitCalculator;
