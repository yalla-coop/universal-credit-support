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
  optional,
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
        <CS.Label htmlFor={label} mb={helper ? '1' : '2'}>
          <T.P weight="semi" color={color} m="0">
            {label}
          </T.P>
          {optional && <CS.OptionalTag ml="1">(optional)</CS.OptionalTag>}
          {showPasswordInfo && type === 'password' && (
            <S.InfoWrapper
              type="button"
              onClick={(e) => setPasswordInfoOpen((prev) => !prev)}
            >
              <Icon
                icon="question"
                color="secondaryMain"
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
              <T.P isSmall color="neutralMain" m={0}>
                - a minimum of 8 characters
              </T.P>
              <T.P isSmallcolor="neutralMain" m={0}>
                - one capital letter
              </T.P>
              <T.P isSmallcolor="neutralMain" m={0}>
                - one lowercase letter
              </T.P>
              <T.P isSmallcolor="neutralMain" m={0}>
                - one number
              </T.P>
              <T.P isSmall color="neutralMain" m={0}>
                - one non alphabetical or numeric character
              </T.P>
            </>
          }
          m={{ mt: 4 }}
        />
      )}
    </CS.Field>
  );
};

export default BasicInput;
