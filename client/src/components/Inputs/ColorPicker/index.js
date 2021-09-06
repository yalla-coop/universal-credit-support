import { useState } from 'react';
import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';
import theme from './../../../theme';

import { SketchPicker } from 'react-color';

import { formatColor } from '../../../helpers';

const ColorPicker = ({
  label,
  error,
  value,
  helper,
  color,
  textColor = 'neutralMain',
  w, // width
  disabled,
  m, // margins
  onChange,
  optional,
  ...props
}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker((displayColorPicker) => ({
      displayColorPicker: !displayColorPicker,
    }));
  };

  const handleChange = (color) => {
    const { h, s, l } = color.hsl;
    const updatedCol = { h: h.toFixed(2), s: s.toFixed(2), l: l.toFixed(2) };
    onChange(updatedCol);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <CS.Field w={w} disabled={disabled} {...m}>
      {label && (
        <CS.Label htmlFor={label} mb={helper ? '1' : '2'}>
          <T.H3 textColor={color} m="0">
            {label}
          </T.H3>
          {optional && <CS.OptionalTag ml="1">(optional)</CS.OptionalTag>}
        </CS.Label>
      )}
      {helper && (
        <T.P isSmall color="neutralDark" mb="2">
          {helper}
        </T.P>
      )}
      {console.log('COLOR REN', color)}

      <div style={{ width: '100%', position: 'relative' }}>
        {!color && (
          <T.P
            isSmall
            color="neutralDark"
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Click To Pick
          </T.P>
        )}
        <S.SwatchDiv onClick={handleClick}>
          <S.ColorDiv color={formatColor(color)} />
        </S.SwatchDiv>
        {displayColorPicker ? (
          <S.PopoverDiv>
            <S.CoverDiv onClick={handleClose} />
            <SketchPicker
              color={formatColor(color)}
              onChange={handleChange}
              presetColors={[...new Set(Object.values(theme.colors))]}
            />
          </S.PopoverDiv>
        ) : null}
      </div>

      {error && (
        <T.P color="error" m="0" mt="1">
          {error}
        </T.P>
      )}
    </CS.Field>
  );
};

export default ColorPicker;
