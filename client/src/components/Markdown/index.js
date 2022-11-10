import React from 'react';
import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
import * as T from '../Typography';

const Markdown = ({
  text,
  customStyles = {
    h1: {},
    h2: {},
    h3: {},
    p: {},
  },
  customRender = {},
}) => {
  const overrides = {
    h1: (props) => <T.P {...customStyles.p} {...props} />,
    h2: (props) => <T.P {...customStyles.p} {...props} />,
    h3: (props) => <T.P {...customStyles.p} {...props} />,
    p: (props) =>
      customRender?.p ? (
        customRender.p({ ...props })
      ) : (
        <T.P {...customStyles.p} {...props} />
      ),
  };

  if (typeof text !== 'string') {
    // eslint-disable-next-line no-console
    console.error(
      `Markdown: invalid type passed as prop. Received ${typeof text} with value ${text}`
    );
    return null;
  }
  return compiler(text, {
    overrides,
    forceBlock: true,
    wrapper: React.Fragment,
  });
};

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
};

export default Markdown;
