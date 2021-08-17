import { css } from '@emotion/react';

const style = css`
  @font-face {
    font-family: 'Heebo', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&display=swap');
  }

  @font-face {
    font-family: 'hero-new-hairline', sans-serif;
    src: url('https://use.typekit.net/kqe2fbu.css');
  }

  pre {
    font-family: 'Heebo', sans-serif;
    font-size: 1em;
  }

  code,
  kbd,
  samp {
    font-family: 'Heebo', sans-serif;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Heebo', sans-serif;
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
  h6 {
    margin: 0;
    font-family: 'hero-new-hairline', sans-serif;
  }
  p,
  a {
    margin: 0;
    font-family: 'Heebo', sans-serif;
  }

  code {
    font-family: 'Heebo', sans-serif;
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

  .ant-input:focus,
  .ant-input-password:hover,
  .ant-input-search:hover,
  .ant-input-affix-wrapper:hover {
    border-color: inherit !important;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0px rgba(87, 168, 233, 0.2);
    box-shadow: 0 0 0 0px rgba(87, 168, 233, 0.2);
  }

  .ant-input:hover,
  .ant-input-password:hover,
  .ant-input-search:hover,
  .ant-input-affix-wrapper:hover {
    border-color: inherit !important;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0px rgba(87, 168, 233, 0.2);
    box-shadow: 0 0 0 0px rgba(87, 168, 233, 0.2);
  }
`;

export default style;
