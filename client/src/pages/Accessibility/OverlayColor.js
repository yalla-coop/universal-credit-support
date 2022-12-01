import * as S from './style';
import { Typography as T } from '../../components';
import { useAccessibility } from '../../context/accessibility';

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

  return (
    <>
      <T.H2 color="neutralMain" mb="4">
        Add colour overlay
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
                {item.label}
              </T.P>
            </S.TextWrapper>
          </S.Button>
        ))}
      </S.ButtonsWrapper>
    </>
  );
};

export default OverlayColor;
