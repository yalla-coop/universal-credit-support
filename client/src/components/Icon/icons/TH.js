const TH = ({ width, height, color, ...props }) => (
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
      id="mask0_54_1642"
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
    <g mask="url(#mask0_54_1642)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.85856H24V3.42999H0V6.85856Z"
        fill="#F12532"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5729H24V17.1443H0V20.5729Z"
        fill="#F12532"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.8586H24V9.14429H0V14.8586Z"
        fill="#322B6C"
      />
    </g>
  </svg>
);

export default TH;
