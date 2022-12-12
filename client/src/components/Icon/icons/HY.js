const HY = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    <mask
      id="mask0_54_3070"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_3070)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.8586H24V9.1443H0V14.8586Z"
        fill="#1047B9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.14428H24V3.42999H0V9.14428Z"
        fill="#F01C31"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H24V14.8585H0V20.5728Z"
        fill="#FECB2F"
      />
    </g>
  </svg>
);

export default HY;
