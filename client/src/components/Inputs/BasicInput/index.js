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
  color = 'neutralMain',
  w, // width
  disabled,
  autoComplete,
  m, // margins
  showPasswordInfo,
  optional,
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
        <CS.Label htmlFor={label} mb={helper ? '1' : '2'}>
          <T.P weight="semi" color={color} m="0">
            {label}
          </T.P>
          {optional && <CS.OptionalTag ml="1">(optional)</CS.OptionalTag>}
        </CS.Label>
      )}
      {helper && (
        <T.P isSmall color="neutralDark" mb="3">
          {helper}
        </T.P>
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
      {error && (
        <T.P color="error" m="0" mt="1">
          {error}
        </T.P>
      )}
    </CS.Field>
  );
};

export default BasicInput;
