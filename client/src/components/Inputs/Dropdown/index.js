import { useState } from 'react';
import { Select as AntdSelect } from 'antd';
import * as T from '../../Typography';
import * as S from './style';
import * as CS from './../style';
import Icon from '../../Icon';

const { OptGroup: AntdOptGroup } = AntdSelect;

const Dropdown = ({
  handleChange,
  label,
  color = 'gray9',
  placeholder = 'Select...',
  error,
  helper,
  w,
  disabled,
  options = [],
  groupedOptions,
  selected,
  multi,
  m,
  bold,
  search,
  addNew,
  allowClear = true,
}) => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const decideColor = () => {
    if (error) return 'error';
    return color;
  };

  const isSelected = (option) =>
    selected === option || (selected && selected.toString().includes(option));

  const renderOptions = () => {
    if (groupedOptions) {
      return options.map(({ groupLabel, options: _options }) => (
        <AntdOptGroup
          label={
            <T.P color={color} m="0" mb="2">
              {label}
            </T.P>
          }
          key={groupLabel}
        >
          {_options.map((opt) => (
            <S.Option
              key={`${groupLabel}_${opt.label}`}
              value={opt.value}
              points={opt.points}
              isSelected={isSelected(opt.value)}
              {...options}
            >
              {opt.label}
            </S.Option>
          ))}
        </AntdOptGroup>
      ));
    }
    return options.map((options) => {
      const { value: _value, label: _label } = options;

      return (
        <S.Option key={_value} value={_value} label={_label} {...options}>
          {_label}
        </S.Option>
      );
    });
  };

  const handleSearch = (input, option) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  const decideMode = () => {
    if (addNew) return 'tags';
    if (multi) return 'multiple';
    return;
  };

  return (
    <S.Field
      w={w}
      disabled={disabled}
      open={open}
      focus={focus}
      multi={multi}
      color={decideColor()}
      error={error}
      search={search}
      {...m}
    >
      {label && (
        <CS.Label htmlFor={label}>
          <T.P color={color} m="0" mb="2" bold={bold ? 1 : 0}>
            {label}
          </T.P>
        </CS.Label>
      )}
      <S.Answer>
        <AntdSelect
          value={selected || undefined}
          onSelect={(val, option) =>
            multi ? undefined : handleChange(val, option)
          }
          onChange={(val, option) =>
            multi ? handleChange(val, option) : undefined
          }
          mode={decideMode()}
          placeholder={placeholder || 'Type here...'}
          showArrow
          allowClear={allowClear}
          onDropdownVisibleChange={(open) => setOpen(open)}
          dropdownStyle={S.menuStyle}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          filterOption={addNew || handleSearch}
          suffixIcon={
            search ? (
              <Icon icon="search" width="24" height="24" color="black" />
            ) : undefined
          }
          showSearch={addNew || search}
        >
          {renderOptions()}
        </AntdSelect>
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
      </S.Answer>
    </S.Field>
  );
};

export default Dropdown;
