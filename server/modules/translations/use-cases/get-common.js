import * as Common from '../model';

const getCommon = async ({ lng }) => {
  const common = await Common.getCommon(lng);

  return common;
};

export default getCommon;
