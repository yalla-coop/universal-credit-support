import { Rate as AntdRate } from 'antd';
import * as T from '../../Typography';
import * as CS from '../style';
import theme from './../../../theme';

const Rate = ({
  error,
  value,
  handleChange,
  w, // width
  disabled,
  m, // margins
  allowClear,
  ...props
}) => {
  return (
    <CS.Field w={w} {...m}>
      <AntdRate
        value={value}
        style={{ color: theme.colors.green }}
        onChange={handleChange}
        disabled={disabled}
        allowClear={allowClear}
        {...props}
      />

      {error && (
        <T.P color="error" m="0" mt="-10px">
          {error}
        </T.P>
      )}
    </CS.Field>
  );
};

export default Rate;
