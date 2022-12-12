const HE = ({ width, height, color, ...props }) => (
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
      id="mask0_54_1533"
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
    <g mask="url(#mask0_54_1533)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.85856H24V3.42999H0V6.85856Z"
        fill="#0E46D4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5729H24V17.1443H0V20.5729Z"
        fill="#0E46D4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00982 14.3824L12 7.20009L15.9901 14.3824L8.00982 14.3824ZM9.14283 13.7157L14.8571 13.7157L12 8.57284L9.14283 13.7157Z"
        fill="#093EC5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00982 9.62047L12 16.8027L15.9901 9.62047L8.00982 9.62047ZM9.14283 10.2871L14.8571 10.2871L12 15.43L9.14283 10.2871Z"
        fill="#093EC5"
      />
    </g>
  </svg>
);

export default HE;
