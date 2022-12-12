const UK = ({ width, height, color, ...props }) => (
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
      id="mask0_54_2789"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_2789)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.5729H24V3.42999H0V12.5729Z"
        fill="#156DD1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5729H24V12.5729H0V20.5729Z"
        fill="#FFD948"
      />
    </g>
  </svg>
);

export default UK;
