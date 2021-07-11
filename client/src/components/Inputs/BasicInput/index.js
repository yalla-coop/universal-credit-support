import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';

const BasicInput = ({
  type = 'text',
  name,
  placeholder = 'Type here...',
  label,
  error,
  value,
  handleChange,
  helper,
  color = 'gray9',
  w, // width
  disabled,
  autoComplete,
  m, // margins
  showPasswordInfo,
  ...props
}) => {
  const decideColor = () => {
    if (error) return 'error';
    return color;
  };
  const onChange = (e) => {
    handleChange(e.target.value, e);
  };

  const Component = type === 'password' ? S.PasswordInput : S.Input;
  return (
    <CS.Field w={w} disabled={disabled} {...m}>
      {label && (
        <CS.Label htmlFor={label}>
          <T.P color={color} m="0" mb="2">
            {label}
          </T.P>
        </CS.Label>
      )}
      <Component
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        color={decideColor()}
        disabled={disabled}
        autoComplete={autoComplete || 'on'}
        error={error}
        {...props}
      />
      {helper && (
        <T.P color={color} mt="2">
          {helper}
        </T.P>
      )}
      {error && (
        <T.P color="error" m="0" mt="1">
          {error}
        </T.P>
      )}
    </CS.Field>
  );
};

export default BasicInput;
