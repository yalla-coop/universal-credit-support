const HI = ({ width, height, color, ...props }) => (
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
      id="mask0_0_89"
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
    <g mask="url(#mask0_0_89)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.14287H24V3.42859H0V9.14287Z"
        fill="#FFA44A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5715H24V14.8572H0V20.5715Z"
        fill="#1A9F0B"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="#181A93"
        fillOpacity="0.15"
        stroke="#181A93"
        strokeWidth="0.571429"
      />
      <circle cx="12" cy="12" r="0.571429" fill="#181A93" />
    </g>
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
  </svg>
);

export default HI;
