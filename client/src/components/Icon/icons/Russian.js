const Russian = ({ width, height, color, ...props }) => (
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
      id="mask0_0_468"
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
    <g mask="url(#mask0_0_468)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.3334H28V6.66669H0V13.3334Z"
        fill="#0C47B7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20H28V13.3333H0V20Z"
        fill="#E53B35"
      />
    </g>
  </svg>
);

export default Russian;
