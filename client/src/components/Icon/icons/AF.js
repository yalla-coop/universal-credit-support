const AF = ({ width, height, color, ...props }) => (
  <svg
    width={width | '24'}
    height={height | '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="3.43" width="24" height="17.1429" rx="2" fill="#06A86E" />
    <mask
      id="mask0_54_1632"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.43" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_1632)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.71578L8 12.0015L0 18.2872V5.71578Z"
        fill="#FFBF2E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-1.14282 6.00143L6.57146 12.0014L-1.14282 18.0014V6.00143Z"
        fill="#262626"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2857 10.2871L2.28571 3.43H24V10.2871H10.2857Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5714 9.14429L3.71429 3.43H24V9.14429H10.5714Z"
        fill="#F44E46"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.28571 20.5729H24V13.7157H10.2857L2.28571 20.5729Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.71429 20.5728H24V14.8585H10.5714L3.71429 20.5728Z"
        fill="#072CB4"
      />
    </g>
  </svg>
);

export default AF;
