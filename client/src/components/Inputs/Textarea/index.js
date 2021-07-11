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
  color = 'gray9',
  w, // width
  disabled,
  rows,
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
        <CS.Label htmlFor={label}>
          <T.P color={color} m="0" mb="2">
            {label}
          </T.P>
        </CS.Label>
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

export default Textarea;
