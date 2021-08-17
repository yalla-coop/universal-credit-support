import { useState } from 'react';
import * as T from '../../Typography';
import * as CS from '../style';
import * as S from './style';
import Icon from '../../Icon';
import Info from '../../Info';

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
  ...props
}) => {
  const [passwordInfoOpen, setPasswordInfoOpen] = useState(false);

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
          <T.H3 color={color} m="0" mb={helper ? '1' : '2'}>
            {label}
          </T.H3>
          {showPasswordInfo && type === 'password' && (
            <S.InfoWrapper
              type="button"
              onClick={(e) => setPasswordInfoOpen((prev) => !prev)}
            >
              <Icon
                icon="questionMark"
                color="primaryMain"
                width="16"
                height="16"
              />
            </S.InfoWrapper>
          )}
        </CS.Label>
      )}
      {helper && (
        <T.P isSmall color="neutralDark" mb="2">
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
      {passwordInfoOpen && (
        <Info
          title="Password must contain:"
          body={
            <>
              <T.P color="gray9" m={0}>
                - a minimum of 8 characters
              </T.P>
              <T.P color="gray9" m={0}>
                - one capital letter
              </T.P>
              <T.P color="gray9" m={0}>
                - one lowercase letter
              </T.P>
              <T.P color="gray9" m={0}>
                - one number
              </T.P>
              <T.P color="gray9" m={0}>
                - one non alphabetical or numeric character
              </T.P>
            </>
          }
          m={{ mt: 5 }}
        />
      )}
    </CS.Field>
  );
};

export default BasicInput;
