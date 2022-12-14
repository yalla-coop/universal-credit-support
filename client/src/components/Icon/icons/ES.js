const ES = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="3.42856" width="24" height="17.1429" rx="1.71429" fill="white" />
    <mask
      id="mask0_0_60"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42856" width="24" height="17.1429" rx="1.71429" fill="white" />
    </mask>
    <g mask="url(#mask0_0_60)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.99999H24V3.42856H0V7.99999Z"
        fill="#DD172C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5714H24V16H0V20.5714Z"
        fill="#DD172C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16H24V8H0V16Z"
        fill="#FFD133"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.28571 11.4286H7.42856V12H6.28571V11.4286Z"
        fill="#FFEDB1"
      />
      <path
        d="M5.19344 11.4523C5.17956 11.2857 5.31102 11.1428 5.47817 11.1428H7.09326C7.26041 11.1428 7.39187 11.2857 7.37799 11.4523L7.23117 13.214C7.19415 13.6583 6.82278 14 6.37699 14H6.19444C5.74865 14 5.37728 13.6583 5.34026 13.214L5.19344 11.4523Z"
        stroke="#A41517"
        strokeWidth="0.571429"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.14285 12H7.42857V12.5714H6.85714L6.28571 13.7143L5.71428 12.5714H5.14285V12Z"
        fill="#A41517"
      />
      <rect
        x="3.42856"
        y="10.2857"
        width="1.14286"
        height="4"
        rx="0.571429"
        fill="#A41517"
      />
      <rect
        x="8"
        y="10.2857"
        width="1.14286"
        height="4"
        rx="0.571429"
        fill="#A41517"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.14285 10.0571C5.14285 9.55219 5.55219 9.14285 6.05714 9.14285H6.51428C7.01923 9.14285 7.42857 9.55219 7.42857 10.0571C7.42857 10.1834 7.32623 10.2857 7.2 10.2857H5.37142C5.24519 10.2857 5.14285 10.1834 5.14285 10.0571Z"
        fill="#A41517"
      />
    </g>
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
  </svg>
);

export default ES;
