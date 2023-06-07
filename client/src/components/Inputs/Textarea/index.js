import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';

const Textarea = ({
  type = 'textarea',
  name = 'textarea',
  placeholder = 'Type here...',
  label,
  error,
  value,
  handleChange,
  helper,
  color = 'neutralMain',
  w, // width
  disabled,
  rows,
  optional,
  m, // margins
  ...props
}) => {
  const decideColor = () => {
    if (error) return 'error';
    return color;
  };

  const onChange = (e) => {
    handleChange(e.target.value, e);
  };

  return (
    <CS.Field w={w} disabled={disabled} {...m}>
      {label && (
        <CS.Label htmlFor={label} mb={helper ? '1' : '2'}>
          <T.H3 color={color} m="0">
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
      <S.TextArea
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange && onChange}
        color={decideColor()}
        disabled={disabled}
        rows={rows}
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

export default Textarea;
