import * as S from './style';
import { Row } from '../../Grid';
import { TextWithIcon } from '../../../components';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../theme';

const props = {
  weight: 'medium',
  mr: 2,
  isButton: true,
  iconColor: 'neutralMain',
};

const Desktop = ({ dir, showBack, largeText, handleHide }) => {
  const LTR = (
    <Row>
      <S.DesktopWrapper>
        <S.ButtonWrapper>
          {showBack && (
            <TextWithIcon icon="backArrow" iconColor="neutralMain" isButton />
          )}
          <TextWithIcon
            handleClick={() => null}
            text="Accessibility"
            icon="accessibility"
            {...props}
          />
          <TextWithIcon
            handleClick={() => null}
            text={largeText ? '- Decrease text size' : '+ Increase text size'}
            icon="textSize"
            {...props}
          />
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <TextWithIcon
            handleClick={handleHide}
            text="English"
            icon="en"
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
          icon="ar"
          {...props}
        />
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <TextWithIcon
          handleClick={() => null}
          text={largeText ? '- Decrease text size' : '+ Increase text size'}
          icon="textSize"
          {...props}
        />
        <TextWithIcon
          handleClick={() => null}
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
  const LTR = (
    <S.TabletWrapperLTR showBack={showBack}>
      {showBack && (
        <TextWithIcon icon="backArrow" iconColor="neutralMain" isButton />
      )}
      <S.ButtonWrapper>
        <TextWithIcon
          handleClick={() => null}
          text="Accessibility"
          icon="accessibility"
          {...props}
        />
        <TextWithIcon handleClick={() => null} icon="textSize" {...props} />
        <TextWithIcon handleClick={handleHide} text="EN" icon="en" {...props} />
      </S.ButtonWrapper>
    </S.TabletWrapperLTR>
  );

  const RTL = (
    <S.TabletWrapperRTL showBack={showBack}>
      <S.ButtonWrapper>
        <TextWithIcon handleClick={handleHide} text="AR" icon="ar" {...props} />
        <TextWithIcon handleClick={() => null} icon="textSize" {...props} />
        <TextWithIcon
          text="نموذج"
          handleClick={() => null}
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
