import { css } from '@emotion/react';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400&display=swap');
  pre {
    font-family: 'Lato', sans-serif;
    font-size: 1em;
  }

  code,
  kbd,
  samp {
    font-family: 'Lato', sans-serif;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    word-wrap: break-word;
    min-height: 100% important;
    height: 100%;
  }

  /* to override body margin from antd */
  .sb-show-main.sb-main-padded {
    margin: 0;
    padding: 0;
  }

  /* to override elipsis on dropdown options from antd */
  .ant-select-item-option-content {
    white-space: normal;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    margin: 0;
    font-family: 'Lato', sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  html {
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    min-height: 100% important;
    height: 100%;
  }

  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  *:focus {
    outline: none;
  }

  *:focus-visible {
    outline: #0061ce solid 2px;
  }

  *:active {
    outline: none;
  }

  /* Audio: Remove big play button (leave only the button in controls). */
  .video-js.vjs-audio .vjs-big-play-button {
    display: none;
  }
  /* Audio: Make the controlbar visible by default */
  .video-js.vjs-audio .vjs-control-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  /* Make player height minimum to the controls height so when we hide video/poster area the controls are displayed correctly. */
  .video-js.vjs-audio {
    min-height: 2rem;
  }

  .vjs-text-track-display {
    display: none;
  }

  // Remove recaptcha badge
  .grecaptcha-badge {
    visibility: hidden;
  }
`;

export default style;
