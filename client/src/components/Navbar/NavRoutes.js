import { SUPER_ADMIN, ADMIN } from '../../constants/nav-routes';
import t from '../../constants/translations';
import R from '../../constants/roles';
import * as S from './style';

const handleClick = (cb) => {
  if (typeof cb === 'function') {
    return cb(false);
  }
  return;
};

const decideRoutes = (role) => {
  switch (role) {
    case R.ADMIN:
      return ADMIN;
    case R.SUPER_ADMIN:
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
