import { SUPER_ADMIN, ADMIN } from '../../constants/nav-routes';
import t from '../../constants/translations';
import R from '../../constants/roles';
import * as S from './style';
import { useAuth } from '../../context/auth';
import { useHistory } from 'react-router-dom';
const handleClick = (cb) => {
  if (typeof cb === 'function') {
    return cb(false);
  }
  return;
};

const DecideRoutes = ({ setOpen }) => {
  const {
    user: { role },
    logout,
  } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    handleClick(setOpen);
    await logout();

    history.push(ADMIN.LOGIN);
  };

  switch (role) {
    case R.ADMIN:
      return (
        <>
          <S.Link to={ADMIN.DASHBOARD} onClick={() => handleClick(setOpen)}>
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['HOME']}
            </S.Head3>
          </S.Link>
          <S.Link to={ADMIN.EDIT_DETAILS} onClick={() => handleClick(setOpen)}>
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['EDIT_DETAILS']}
            </S.Head3>
          </S.Link>
          <S.Link to={ADMIN.CUSTOMISE} onClick={() => handleClick(setOpen)}>
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['CUSTOMISE']}
            </S.Head3>
          </S.Link>
          <S.Link onClick={handleLogout}>
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['LOG_OUT']}
            </S.Head3>
          </S.Link>
        </>
      );
    case R.SUPER_ADMIN:
      return (
        <>
          <S.Link
            to={SUPER_ADMIN.DASHBOARD}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['HOME']}
            </S.Head3>
          </S.Link>
          <S.Link
            to={SUPER_ADMIN.EDIT_CONTENT}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['EDIT_CONTENT']}
            </S.Head3>
          </S.Link>
          <S.Link
            to={SUPER_ADMIN.ORGANISATIONS}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['ORGANISATIONS']}
            </S.Head3>
          </S.Link>
          <S.Link to={SUPER_ADMIN.CHANGES} onClick={() => handleClick(setOpen)}>
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['CHANGES']}
            </S.Head3>
          </S.Link>
          <S.Link
            to={SUPER_ADMIN.EDIT_DETAILS}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['EDIT_DETAILS']}
            </S.Head3>
          </S.Link>
          <S.Link
            to={SUPER_ADMIN.CUSTOMISE}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['CUSTOMISE']}
            </S.Head3>
          </S.Link>
          <S.Link onClick={handleLogout}>
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['LOG_OUT']}
            </S.Head3>
          </S.Link>
        </>
      );
    default:
      return (
        <>
          <S.Link to={ADMIN.LOGIN} onClick={() => handleClick(setOpen)}>
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['LOGIN']}
            </S.Head3>
          </S.Link>
        </>
      );
  }
};

const Routes = ({ setOpen }) => {
  return (
    <>
      <DecideRoutes setOpen={setOpen} />
    </>
  );
};

export default Routes;
