import { Fragment } from 'react';
import * as T from '../../Typography';
import * as S from './style';
import * as CS from '../style';
import { Col, Row } from '../../Grid';

import Icon from '../../Icon';
import TextWithIcon from '../../TextWithIcon';

const InputArray = ({
  label,
  values = [''],
  type,
  handleChange,
  helper,
  optional,
  name,
  disabled,
  color = 'neutralMain',
  autoComplete,
  placeholder,
  error,
  ...props
}) => {
  const updateValues = (value, index) => {
    if (index === undefined) {
      return handleChange([...values, value]);
    }
    return handleChange([
      ...values.slice(0, index),
      value,
      ...values.slice(index + 1),
    ]);
  };

  const removeValue = (index) => {
    return handleChange([
      ...values.slice(0, index),
      ...values.slice(index + 1),
    ]);
  };

  const Field = type === 'textarea' ? S.Textarea : S.Input;
  const Container = type === 'textarea' ? Col : Fragment;

  return (
    <S.Container style={{ flex: type === 'textarea' && 1 }} {...props}>
      {label && (
        <CS.Label htmlFor={label}>
          <T.H3 color={color} m="0" mb={helper ? '1' : '2'}>
            {label}
            {optional && <CS.OptionalTag ml="1">(optional)</CS.OptionalTag>}
          </T.H3>
        </CS.Label>
      )}
      <Row inner>
        {values.map((value, index) => (
          <Container w={[4, 12, 6]} key={index}>
            <S.InputField key={index} mb="4">
              <div>
                <Field
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={value}
                  onChange={(newVal) =>
                    updateValues(newVal.target.value, index)
                  }
                  disabled={disabled}
                  autoComplete={autoComplete || 'on'}
                  rows="4"
                />
                {error && error[index] && (
                  <T.P color="error" m="0" mt="1">
                    {error[index]}
                  </T.P>
                )}
              </div>

              <S.Button
                disabled={disabled || (values.length === 1 && index === 0)}
                onClick={() => removeValue(index)}
              >
                <Icon icon="close" color="primaryMain" ml="4" />
              </S.Button>
            </S.InputField>
          </Container>
        ))}
      </Row>
      <TextWithIcon
        text="Add another example"
        icon="add"
        isButton
        mt="4"
        color="neutralMain"
        iconColor="primaryMain"
        handleClick={() => updateValues('')}
        weight="semi"
        disabled={
          disabled || values[values.length - 1] === '' || !values.length
        }
      />
    </S.Container>
  );
};

export default InputArray;
