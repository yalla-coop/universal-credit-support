const Polish = ({ width, height, color, ...props }) => (
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
      y="0.25"
      width="27.5"
      height="19.5"
      rx="1.75"
      fill="white"
      stroke="#F5F5F5"
      strokeWidth="0.5"
    />
    <mask
      id="mask0_0_433"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="28"
      height="20"
    >
      <rect
        x="0.25"
        y="0.25"
        width="27.5"
        height="19.5"
        rx="1.75"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </mask>
    <g mask="url(#mask0_0_433)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20H28V9.33331H0V20Z"
        fill="#EB2A50"
      />
    </g>
  </svg>
);

export default Polish;
