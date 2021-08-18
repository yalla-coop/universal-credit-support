import * as T from '../../Typography';
import * as S from './style';
import * as CS from '../style';

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
  ...props
}) => {
  const updateValues = (value, index) => {
    console.log('updateValues', value, index);
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
    console.log('inde', index);
    return handleChange([
      ...values.slice(0, index),
      ...values.slice(index + 1),
    ]);
  };

  return (
    <S.Container {...props}>
      {label && (
        <CS.Label htmlFor={label}>
          <T.H3 color={color} m="0" mb={helper ? '1' : '2'}>
            {label}
            {optional && <CS.OptionalTag ml="1">(optional)</CS.OptionalTag>}
          </T.H3>
        </CS.Label>
      )}
      {values.map((value, index) => (
        <S.InputField key={index} mb="4">
          <S.Input
            type={type}
            name={name}
            value={value}
            onChange={(newVal) => updateValues(newVal.target.value, index)}
            disabled={disabled}
            autoComplete={autoComplete || 'on'}
          />
          <S.Button
            disabled={disabled || (values.length === 1 && index === 0)}
            onClick={() => removeValue(index)}
          >
            <Icon icon="close" color="primaryMain" ml="4" />
          </S.Button>
        </S.InputField>
      ))}
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
