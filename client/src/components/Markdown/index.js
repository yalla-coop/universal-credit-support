import { compiler } from 'markdown-to-jsx';
import * as T from '../Typography';
import * as S from './style';

const bold = (text) => {
  const boldRgx = /\*\*(.*?)\*\*/gm;
  const html = text.replace(boldRgx, '<strong>$1</strong>');
  return html;
};

const Markdown = ({
  text,
  color,
  customStyles = {
    h1: {},
    h2: {},
    h3: {},
    p: {},
    link: {},
    pre: {},
  },
  customRender = {},
}) => {
  const overrides = {
    a: (props) => {
      return (
        <T.Link
          external={true}
          color={customStyles.color}
          {...customStyles.link}
          {...props}
        />
      );
    },
    h3: (props) => (
      <T.H3
        color={customStyles.color || color}
        {...customStyles.h3}
        {...props}
      />
    ),
    div: (props) =>
      customRender?.p ? (
        customRender.p({ ...props })
      ) : (
        <T.P
          color={customStyles.color || color}
          {...customStyles.p}
          {...props}
        />
      ),
    p: (props) =>
      customRender?.p ? (
        customRender.p({ ...props })
      ) : (
        <T.P
          color={customStyles.color || color}
          {...customStyles.p}
          {...props}
        />
      ),
    li: (props) => (
      <li>
        <T.H3
          color={customStyles.color || color}
          {...customStyles.li}
          {...props}
        />
      </li>
    ),
    strong: (props) => (
      <S.Strong
        color={customStyles.color || color}
        {...customStyles.li}
        {...props}
        style={{ marginInlineEnd: 4 }}
      />
    ),
    pre: (props) => <T.Pre {...customStyles.pre} {...props} />,
  };

  if (typeof text !== 'string') {
    // eslint-disable-next-line no-console
    console.error(
      `Markdown: invalid type passed as prop. Received ${typeof text} with value ${text}`
    );
    return null;
  }
  return (
    <S.Wrapper color={color}>
      {compiler(bold(text), {
        overrides,
        forceBlock: true,
      })}
    </S.Wrapper>
  );
};

export default Markdown;
