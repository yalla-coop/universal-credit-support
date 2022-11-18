const French = ({ width, height, color, ...props }) => (
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
      y="3.67856"
      width="23.5"
      height="16.6429"
      rx="1.46429"
      fill="white"
      stroke="#F5F5F5"
      strokeWidth="0.5"
    />
    <mask
      id="mask0_0_65"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect
        x="0.25"
        y="3.67856"
        width="23.5"
        height="16.6429"
        rx="1.46429"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </mask>
    <g mask="url(#mask0_0_65)">
      <rect x="16" y="3.42856" width="8" height="17.1429" fill="#F44653" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5714H8V3.42856H0V20.5714Z"
        fill="#1035BB"
      />
    </g>
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
  </svg>
);

export default French;
