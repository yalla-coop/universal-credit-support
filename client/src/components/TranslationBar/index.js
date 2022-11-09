import * as S from './style';
import { Grid } from 'antd';
import { TextWithIcon } from '../../components';
const { useBreakpoint } = Grid;

const props = {
  weight: 'medium',
  mr: 2,
  isButton: true,
  iconColor: 'neutralMain',
};

const Desktop = ({ dir, showBack, largeText }) => {
  const LTR = (
    <S.DesktopWrapper>
      <S.ButtonWrapper>
        {showBack && (
          <TextWithIcon icon="backArrow" iconColor="neutralMain" isButton />
        )}
        <TextWithIcon
          // text={t('callUsLinkText', lang)}
          // handleClick={() => setStuck(true)}
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
          handleClick={() => null}
          text="English"
          icon="flagEN"
          {...props}
        />
      </S.ButtonWrapper>
    </S.DesktopWrapper>
  );

  const RTL = (
    <S.DesktopWrapper>
      <S.ButtonWrapper>
        <TextWithIcon
          handleClick={() => null}
          text="Arabic"
          icon="flagAR"
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

  return dir === 'ltr' ? LTR : RTL;
};

const Mobile = ({ dir, showBack }) => {
  const LTR = (
    <S.MobileWrapperLTR showBack={showBack}>
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
        <TextWithIcon
          handleClick={() => null}
          text="EN"
          icon="flagEN"
          {...props}
        />
      </S.ButtonWrapper>
    </S.MobileWrapperLTR>
  );

  const RTL = (
    <S.MobileWrapperRTL showBack={showBack}>
      <S.ButtonWrapper>
        <TextWithIcon
          handleClick={() => null}
          text="AR"
          icon="flagAR"
          {...props}
        />
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
    </S.MobileWrapperRTL>
  );

  return dir === 'ltr' ? LTR : RTL;
};

export const TranslationBar = ({ dir, largeText, showBack }) => {
  const props = { dir, largeText, showBack };
  const screens = useBreakpoint();
  const medium = Object.entries(screens)
    .filter((screen) => !!screen[1])
    .map((screen) => screen[0])
    .includes('md');

  return medium ? <Desktop {...props} /> : <Mobile {...props} />;
};
