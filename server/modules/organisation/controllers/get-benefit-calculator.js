import { getBenefitCalculator as getBenefitCalculatorUseCase } from '../use-cases';

const getBenefitCalculator = async (req, res, next) => {
  // const { id: userId } = req.user;
  const { orgLink } = req.query;
  try {
    const results = await getBenefitCalculatorUseCase({
      orgLink,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getBenefitCalculator;
