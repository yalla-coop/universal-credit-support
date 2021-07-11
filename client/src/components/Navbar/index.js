import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import NavRoutes from './NavRoutes';
import theme from '../../theme';

import * as S from './style';
import Icon from '../Icon';
import Image from '../Image';

const NavItems = ({ setOpen }) => {
  return (
    <S.Div>
      <NavRoutes setOpen={setOpen} />
    </S.Div>
  );
};
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.tablet})`,
  });

  return !isTablet ? (
    <NavItems />
  ) : (
    <>
      <Icon icon="menu" width={20} height={20} onClick={() => setOpen(true)} />
      <S.Drawer
        title="Basic Drawer"
        placement={'right'}
        closable={false}
        visible={open}
        key={'placement'}
        maskStyle={{ display: 'none' }}
        headerStyle={{ display: 'none' }}
        width="100%"
        drawerStyle={{ background: 'white', display: 'flex' }}
      >
        <Icon
          icon="cross"
          width={18}
          height={18}
          onClick={() => setOpen(false)}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
            zIndex: 2,
          }}
        />
        <NavItems setOpen={setOpen} />
        <S.RainbowContainer>
          <Image image="rainbow" customStyle={{ width: '100%' }} />
        </S.RainbowContainer>
      </S.Drawer>
    </>
  );
};

export default Navbar;
