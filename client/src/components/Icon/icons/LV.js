const LV = ({ width, height, color, ...props }) => (
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
      y="3.68"
      width="23.5"
      height="16.6429"
      rx="1.75"
      fill="white"
      stroke="#F5F5F5"
      strokeWidth="0.5"
    />
    <mask
      id="mask0_54_3669"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect
        x="0.25"
        y="3.68"
        width="23.5"
        height="16.6429"
        rx="1.75"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </mask>
    <g mask="url(#mask0_54_3669)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10.2871H24V3.43H0V10.2871Z"
        fill="#B9414B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5729H24V13.7157H0V20.5729Z"
        fill="#B9414B"
      />
    </g>
  </svg>
);

export default LV;
