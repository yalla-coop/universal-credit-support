import { SUPER_ADMIN, ADMIN } from '../../constants/nav-routes';
import t from '../../constants/translations';
import R from '../../constants/roles';
import * as S from './style';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleLogout = async () => {
    handleClick(setOpen);
    logout();

    navigate(ADMIN.LOGIN);
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
          <S.Link
            to={ADMIN.EDIT_ACCOUNT_DETAILS}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['EDIT_ACCOUNT_DETAILS']}
            </S.Head3>
          </S.Link>
          <S.Link
            to={ADMIN.ADD_UPDATE_CONTENT}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['ADD_UPDATE_CONTENT']}
            </S.Head3>
          </S.Link>
          <S.Link
            to={ADMIN.CUSTOMISE_RESOURCES}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['CUSTOMISE_RESOURCES']}
            </S.Head3>
          </S.Link>
          <S.Link to={ADMIN.CUSTOMISE} onClick={() => handleClick(setOpen)}>
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['CUSTOMISE_COLORS']}
            </S.Head3>
          </S.Link>

          <S.Link onClick={handleLogout} to={ADMIN.LOG_OUT}>
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
            to={SUPER_ADMIN.ADD_UPDATE_CONTENT}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['ADD_UPDATE_CONTENT']}
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
          <S.Link
            to={SUPER_ADMIN.CONTENT_REVIEW}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['CONTENT_REVIEW']}
            </S.Head3>
          </S.Link>
          <S.Link to={SUPER_ADMIN.CHANGES} onClick={() => handleClick(setOpen)}>
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['CHANGES']}
            </S.Head3>
          </S.Link>
          <S.Link
            to={SUPER_ADMIN.EDIT_ACCOUNT_DETAILS}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['EDIT_ACCOUNT_DETAILS']}
            </S.Head3>
          </S.Link>
          <S.Link
            to={SUPER_ADMIN.CUSTOMISE}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['CUSTOMISE_COLORS']}
            </S.Head3>
          </S.Link>
          <S.Link
            to={ADMIN.CUSTOMISE_RESOURCES}
            onClick={() => handleClick(setOpen)}
          >
            <S.Head3 weight="bold" color="neutralMain">
              {t.english['CUSTOMISE_RESOURCES']}
            </S.Head3>
          </S.Link>
          <S.Link onClick={handleLogout} to={ADMIN.LOG_OUT}>
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
              {t.english['LOG_IN']}
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
