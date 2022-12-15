const JA = ({ width, height, color, ...props }) => (
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
      id="mask0_54_2303"
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
    <g mask="url(#mask0_54_2303)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17.1443C14.8403 17.1443 17.1429 14.8417 17.1429 12.0014C17.1429 9.16109 14.8403 6.85855 12 6.85855C9.15968 6.85855 6.85715 9.16109 6.85715 12.0014C6.85715 14.8417 9.15968 17.1443 12 17.1443Z"
        fill="url(#paint0_linear_54_2303)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_54_2303"
        x1="6.85715"
        y1="6.85855"
        x2="6.85715"
        y2="17.1443"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D81441" />
        <stop offset="1" stopColor="#BB0831" />
      </linearGradient>
    </defs>
  </svg>
);

export default JA;
