import { useNavigate } from 'react-router-dom';
import { useAccessibility } from '../../../context/accessibility';

import * as S from './style';
import { Row } from '../../Grid';
import { TextWithIcon } from '../../../components';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../theme';
import * as R from '../../../constants/nav-routes';
const props = {
  weight: 'medium',
  mr: 2,
  isButton: true,
  iconColor: 'neutralMain',
};

const Desktop = ({ dir, showBack, largeText, handleHide }) => {
  const navigate = useNavigate();
  const { isFontLarge, setIsFontLarge } = useAccessibility();

  const LTR = (
    <Row>
      <S.DesktopWrapper>
        <S.ButtonWrapper>
          {showBack && (
            <TextWithIcon icon="backArrow" iconColor="neutralMain" isButton />
          )}

          <TextWithIcon
            handleClick={() => {
              if (!isFontLarge) {
                document.getElementsByTagName('html')[0].style.fontSize =
                  '1.25rem';
                localStorage.setItem('isFontLarge', 'true');
                setIsFontLarge(true);
              } else {
                document.getElementsByTagName('html')[0].style.fontSize =
                  '1rem';
                localStorage.removeItem('isFontLarge');
                setIsFontLarge(false);
              }
            }}
            text={isFontLarge ? '- Decrease text size' : '+ Increase text size'}
            icon="textSize"
            {...props}
          />
          <TextWithIcon
            handleClick={() => navigate(R.GENERAL.ACCESSIBILITY)}
            text="Accessibility"
            icon="accessibility"
            {...props}
          />
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <TextWithIcon
            handleClick={handleHide}
            text="English"
            icon="english"
            {...props}
          />
        </S.ButtonWrapper>
      </S.DesktopWrapper>
    </Row>
  );

  const RTL = (
    <S.DesktopWrapper>
      <S.ButtonWrapper>
        <TextWithIcon
          handleClick={handleHide}
          text="Arabic"
          icon="arabic"
          {...props}
        />
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <TextWithIcon
          handleClick={() => {
            if (!isFontLarge) {
              document.getElementsByTagName('html')[0].style.fontSize =
                '1.25rem';
              localStorage.setItem('isFontLarge', 'true');
              setIsFontLarge(true);
            } else {
              document.getElementsByTagName('html')[0].style.fontSize = '1rem';
              localStorage.removeItem('isFontLarge');
              setIsFontLarge(false);
            }
          }}
          text={isFontLarge ? '- Decrease text size' : '+ Increase text size'}
          icon="textSize"
          {...props}
        />
        <TextWithIcon
          handleClick={() => navigate(R.GENERAL.ACCESSIBILITY)}
          text="نموذج"
          icon="accessibility"
          {...props}
        />
        {showBack && (
          <TextWithIcon icon="backArrowRTL" iconColor="neutralMain" isButton />
        )}
      </S.ButtonWrapper>
    </S.DesktopWrapper>
  );

  return dir === 'rtl' ? RTL : LTR;
};

const Tablet = ({ dir, showBack, handleHide }) => {
  const navigate = useNavigate();
  const { isFontLarge, setIsFontLarge } = useAccessibility();

  const LTR = (
    <S.TabletWrapperLTR showBack={showBack}>
      {showBack && (
        <TextWithIcon icon="backArrow" iconColor="neutralMain" isButton />
      )}
      <S.ButtonWrapper>
        <TextWithIcon
          handleClick={() => navigate(R.GENERAL.ACCESSIBILITY)}
          text="Accessibility"
          icon="accessibility"
          {...props}
        />
        <TextWithIcon
          handleClick={() => {
            if (!isFontLarge) {
              document.getElementsByTagName('html')[0].style.fontSize =
                '1.25rem';
              localStorage.setItem('isFontLarge', 'true');
              setIsFontLarge(true);
            } else {
              document.getElementsByTagName('html')[0].style.fontSize = '1rem';
              localStorage.removeItem('isFontLarge');
              setIsFontLarge(false);
            }
          }}
          icon="textSize"
          {...props}
        />
        <TextWithIcon
          handleClick={handleHide}
          text="EN"
          icon="english"
          {...props}
        />
      </S.ButtonWrapper>
    </S.TabletWrapperLTR>
  );

  const RTL = (
    <S.TabletWrapperRTL showBack={showBack}>
      <S.ButtonWrapper>
        <TextWithIcon
          handleClick={handleHide}
          text="AR"
          icon="arabic"
          {...props}
        />
        <TextWithIcon
          handleClick={() => {
            if (!isFontLarge) {
              document.getElementsByTagName('html')[0].style.fontSize =
                '1.25rem';
              localStorage.setItem('isFontLarge', 'true');
              setIsFontLarge(true);
            } else {
              document.getElementsByTagName('html')[0].style.fontSize = '1rem';
              localStorage.removeItem('isFontLarge');
              setIsFontLarge(false);
            }
          }}
          icon="textSize"
          {...props}
        />
        <TextWithIcon
          text="نموذج"
          handleClick={() => navigate(R.GENERAL.ACCESSIBILITY)}
          icon="accessibility"
          {...props}
        />
      </S.ButtonWrapper>
      {showBack && (
        <TextWithIcon icon="backArrowRTL" iconColor="neutralMain" isButton />
      )}
    </S.TabletWrapperRTL>
  );

  return dir === 'rtl' ? RTL : LTR;
};

export const LanguageBar = ({ dir, largeText, showBack, handleHide }) => {
  const props = { dir, largeText, showBack, handleHide };
  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.tablet})`,
  });
  return isTablet ? <Tablet {...props} /> : <Desktop {...props} />;
};
