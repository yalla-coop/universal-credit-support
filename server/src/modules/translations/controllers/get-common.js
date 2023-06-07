import * as Common from '../use-cases';

const getCommon = async (req, res, next) => {
  try {
    const { lng } = req.query;
    const common = await Common.getCommon({ lng });

    res.json(common);
  } catch (error) {
    next(error);
  }
};

export default getCommon;
