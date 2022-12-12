const IT = ({ width, height, color, ...props }) => (
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
      y="3.67859"
      width="23.5"
      height="16.6429"
      rx="1.46429"
      fill="white"
      stroke="#F5F5F5"
      strokeWidth="0.5"
    />
    <mask
      id="mask0_0_87"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect
        x="0.25"
        y="3.67859"
        width="23.5"
        height="16.6429"
        rx="1.46429"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </mask>
    <g mask="url(#mask0_0_87)">
      <rect x="16" y="3.42859" width="8" height="17.1429" fill="#E43D4C" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5714H8V3.42859H0V20.5714Z"
        fill="#1BB65D"
      />
    </g>
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
  </svg>
);

export default IT;
