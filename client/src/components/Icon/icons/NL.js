const NL = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="0.25"
      y="3.67999"
      width="23.5"
      height="16.6429"
      rx="1.75"
      fill="white"
      stroke="#F5F5F5"
      strokeWidth="0.5"
    />
    <mask
      id="mask0_54_2990"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect
        x="0.25"
        y="3.67999"
        width="23.5"
        height="16.6429"
        rx="1.75"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </mask>
    <g mask="url(#mask0_54_2990)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.14428H24V3.42999H0V9.14428Z"
        fill="#CA2B39"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H24V14.8585H0V20.5728Z"
        fill="#2C56A2"
      />
    </g>
  </svg>
);

export default NL;
