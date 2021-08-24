import { getHelpDetails as getHelpDeailsUseCase } from '../use-cases';

const getHelpDetails = async (req, res, next) => {
  // const { id: userId } = req.user;
  const { orgLink } = req.query;
  try {
    const results = await getHelpDeailsUseCase({
      orgLink,
    });

    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getHelpDetails;
