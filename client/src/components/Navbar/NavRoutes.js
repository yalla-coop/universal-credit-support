import { SUPER_ADMIN, ADMIN } from '../../constants/nav-routes';
import t from '../../constants/translations';

import * as S from './style';

const handleClick = (cb) => {
  if (typeof cb === 'function') {
    return cb(false);
  }
  return;
};

const decideRoutes = (role) => {
  switch (role) {
    case 'claimants':
      return ADMIN;
    case 'admin':
      return ADMIN;
    case 'superAdmin':
      return SUPER_ADMIN;
    default:
      // for now
      return SUPER_ADMIN;
  }
};

const Routes = ({ setOpen, role }) => {
  const routesObject = decideRoutes(role);
  const menuRoutes = Object.keys(routesObject);
  return (
    <>
      {menuRoutes.map((r) => (
        <S.Link to={routesObject[r]} onClick={() => handleClick(setOpen)}>
          <S.Head3 weight="bold" color="neutralMain">
            {t.english[r]}
          </S.Head3>
        </S.Link>
      ))}
    </>
  );
};

export default Routes;
