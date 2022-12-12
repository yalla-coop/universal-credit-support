const MT = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3193"
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
    <g mask="url(#mask0_54_3193)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3.43H6.85715L8.57143 4.57286L6.85715 5.71571L8.57143 6.85857L6.85715 8.00143L8.57143 9.14429L6.85715 10.2871L8.57143 11.43L6.85715 12.5729L8.57143 13.7157L6.85715 14.8586L8.57143 16.0014L6.85715 17.1443L8.57143 18.2871L6.85715 19.43L8.57143 20.5729H24V3.43Z"
        fill="#E7243B"
      />
    </g>
  </svg>
);

export default MT;
