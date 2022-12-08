import MDEditor from '@uiw/react-md-editor';
import * as T from '../Typography';
import * as S from './style';

const Editor = ({
  value,
  onChange,
  mode,
  error,
  label,
  helper,
  placeholder,
  m,
  optional,
  color = 'neutralMain',
  ...props
}) => {
  return (
    <S.Wrapper data-color-mode="light" {...m}>
      {label && (
        <S.Label htmlFor={label} mb={helper ? '1' : '2'}>
          <T.P weight="bold" color={color} m="0">
            {label}
          </T.P>
          {optional && <S.OptionalTag ml="1">(optional)</S.OptionalTag>}
        </S.Label>
      )}
      {helper && (
        <T.P isSmall mb="2" ml="2">
          {helper}
        </T.P>
      )}
      <MDEditor
        value={value}
        onChange={onChange}
        preview={mode || 'edit'}
        textareaProps={{
          placeholder: placeholder,
        }}
        {...props}
      />
      {error && <T.P color="error">{error}</T.P>}
    </S.Wrapper>
  );
};

export default Editor;
