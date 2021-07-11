import { GENERAL } from '../../constants/nav-routes';

import * as S from './style';

const handleClick = (cb) => {
  if (typeof cb === 'function') {
    return cb(false);
  }
  return;
};

const Routes = ({ setOpen }) => {
  return (
    <>
      <S.Link to={GENERAL['HOME']} onClick={() => handleClick(setOpen)}>
        <S.Head4 weight="bold" color="gray8">
          Home
        </S.Head4>
      </S.Link>
    </>
  );
};

export default Routes;
