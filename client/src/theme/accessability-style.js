import { css } from '@emotion/react';

const style = (fontFamily) => css`
  pre {
    font-family: ${fontFamily || "'Heebo', sans-serif"};
  }

  code,
  kbd,
  samp {
    font-family: ${fontFamily || "'Heebo', sans-serif"};
  }

  body {
    font-family: ${fontFamily || "'Heebo', sans-serif"};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontFamily || "'new-hero', sans-serif"};
  }
  p,
  a {
    font-family: ${fontFamily || "'Heebo', sans-serif"};
  }

  code {
    font-family: ${fontFamily || "'Heebo', sans-serif"};
  }
`;

export default style;
