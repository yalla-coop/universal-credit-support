const EL = ({ width, height, color, ...props }) => (
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
      id="mask0_54_1672"
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
    <g mask="url(#mask0_54_1672)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.57143 3.42999H0V8.00142H4.57143V3.42999ZM11.4285 3.42999H6.85714V8.00142H11.4285V10.2871H24V8.0014H11.4286V5.71571H24V3.42999H11.4286H11.4285ZM6.85714 14.8586H11.4285V14.8586H24V12.5729H11.4286V10.2871H6.85714V14.8586ZM24 17.1443H0V19.43H24V17.1443ZM4.57143 10.2871H0V14.8586H4.57143V10.2871Z"
        fill="#1C6DC1"
      />
    </g>
  </svg>
);

export default EL;
