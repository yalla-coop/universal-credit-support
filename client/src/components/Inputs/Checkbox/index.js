import { Checkbox as AntdCheckbox } from 'antd';
import * as T from '../../Typography';
import * as S from './style';

const Checkbox = ({
  checked,
  label,
  error,
  handleChange,
  color,
  disabled,
  defaultChecked,
  w,
  m,
  ...props
}) => {
  return (
    <S.Field
      w={w}
      disabled={disabled}
      color={color}
      error={error}
      {...props}
      {...m}
    >
      <AntdCheckbox
        onChange={(e) => handleChange(e.target.checked)}
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
      >
        {typeof label === 'string' ? (
          <T.P color={color} m="0">
            {label}
          </T.P>
        ) : (
          label
        )}
      </AntdCheckbox>
      {error && (
        <T.P color="error" m="0" mt="1">
          {error}
        </T.P>
      )}
    </S.Field>
  );
};

export default Checkbox;
