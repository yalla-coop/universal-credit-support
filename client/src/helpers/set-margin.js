import { css } from '@emotion/react';

const margins = ({
  mx,
  mxT,
  mxM,
  ml,
  mlT,
  mlM,
  m,
  mT,
  mM,
  mr,
  mrT,
  mrM,
  my,
  myT,
  myM,
  mt,
  mtT,
  mtM,
  mb,
  mbT,
  mbM,
  theme,
}) => {
  const _mxT = mxT || mx;
  const _mxM = mxM || mxT || mx;

  const _mlT = mlT || ml;
  const _mlM = mlM || mlT || ml;

  const _mT = mT || m;
  const _mM = mM || mT || m;

  const _mrT = mrT || mr;
  const _mrM = mrM || mrT || mr;

  const _myT = myT || my;
  const _myM = myM || myT || my;

  const _mtT = mtT || mt;
  const _mtM = mtM || mtT || mt;

  const _mbT = mbT || mb;
  const _mbM = mbM || mbT || mb;

  return css`
    margin-left: ${theme.spacings[ml] ||
    ml ||
    theme.spacings[mx] ||
    mx ||
    theme.spacings[m] ||
    0} !important;
    margin-right: ${theme.spacings[mr] ||
    mr ||
    theme.spacings[mx] ||
    mx ||
    theme.spacings[m] ||
    0} !important;
    margin-top: ${theme.spacings[mt] ||
    mt ||
    theme.spacings[my] ||
    my ||
    theme.spacings[m] ||
    0} !important;
    margin-bottom: ${theme.spacings[mb] ||
    mb ||
    theme.spacings[my] ||
    my ||
    theme.spacings[m] ||
    0} !important;
    ${theme.media.tablet} {
      margin-left: ${theme.spacings[_mlT] ||
      _mlT ||
      theme.spacings[_mxT] ||
      _mxT ||
      theme.spacings[_mT] ||
      0} !important;
      margin-right: ${theme.spacings[_mrT] ||
      _mrT ||
      theme.spacings[_mxT] ||
      _mxT ||
      theme.spacings[_mT] ||
      0} !important;
      margin-top: ${theme.spacings[_mtT] ||
      _mtT ||
      theme.spacings[_myT] ||
      _myT ||
      theme.spacings[_mT] ||
      0} !important;
      margin-bottom: ${theme.spacings[_mbT] ||
      _mbT ||
      theme.spacings[_myT] ||
      _myT ||
      theme.spacings[_mT] ||
      0} !important;
    }
    ${theme.media.mobile} {
      margin-left: ${theme.spacings[_mlM] ||
      _mlM ||
      theme.spacings[_mxM] ||
      _mxM ||
      theme.spacings[_mM] ||
      0} !important;
      margin-right: ${theme.spacings[_mrM] ||
      _mrM ||
      theme.spacings[_mxM] ||
      _mxM ||
      theme.spacings[_mM] ||
      0} !important;
      margin-top: ${theme.spacings[_mtM] ||
      _mtM ||
      theme.spacings[_myM] ||
      _myM ||
      theme.spacings[_mM] ||
      0} !important;
      margin-bottom: ${theme.spacings[_mbM] ||
      _mbM ||
      theme.spacings[_myM] ||
      _myM ||
      theme.spacings[_mM] ||
      0} !important;
    }
  `;
};

export default margins;
