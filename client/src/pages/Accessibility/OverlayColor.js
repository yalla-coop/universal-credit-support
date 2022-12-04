import * as S from './style';
import { Typography as T } from '../../components';
import { useAccessibility } from '../../context/accessibility';
import { useTranslation } from 'react-i18next';
import { common } from '../../constants';

const colors = [
  {
    label: 'Blue',
    value: 'irlenBlue',
  },
  {
    label: 'Green',
    value: 'irlenGreen',
  },
  {
    label: 'Yellow',
    value: 'irlenYellow',
  },
  {
    label: 'Red',
    value: 'irlenRed',
  },
];

const OverlayColor = () => {
  const { t } = useTranslation();
  const { layoutColor, setLayoutColor } = useAccessibility();

  const handleSelect = (color) => {
    if (color === layoutColor) {
      localStorage.setItem('layoutColor', '');
      setLayoutColor('');
    } else {
      localStorage.setItem('layoutColor', color);
      setLayoutColor(color);
    }
  };

  const _colors = t('common.colors', {
    defaultValue: colors,
    returnObjects: true,
  });

  return (
    <>
      <T.H2 color="neutralMain" mb="4">
        {t('common.buttons.addColourOverlay', common.buttons.addColourOverlay)}
      </T.H2>
      <S.ButtonsWrapper>
        {colors.map((item, index) => (
          <S.Button
            value={item.value}
            key={item.value + index}
            isActive={layoutColor === item.value}
            onClick={() => handleSelect(item.value)}
          >
            <S.ColorWrapper bgColor={item.value} />
            <S.TextWrapper>
              <T.P
                color={
                  layoutColor === item.value ? 'neutralSurface' : 'neutralMain'
                }
                weight="normal"
              >
                {_colors[index].label}
              </T.P>
            </S.TextWrapper>
          </S.Button>
        ))}
      </S.ButtonsWrapper>
    </>
  );
};

export default OverlayColor;
