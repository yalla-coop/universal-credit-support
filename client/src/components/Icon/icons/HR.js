const HR = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3408"
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
    <g mask="url(#mask0_54_3408)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.14428H24V3.42999H0V9.14428Z"
        fill="#FF202D"
      />
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14282 8.00145L9.71425 7.43002L10.2857 8.00145V9.14431H9.14282V8.00145ZM11.4285 8.00145L11.9999 7.43002L12.5713 8.00145V9.14431H11.4285V8.00145ZM14.2857 7.43002L13.7143 8.00145V9.14431H14.8572V8.00145L14.2857 7.43002Z"
        fill="#1895DB"
      />
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8571 7.43002L10.2857 8.00145V9.14431H11.4286V8.00145L10.8571 7.43002ZM13.1428 7.43002L12.5714 8.00145V9.14431H13.7142V8.00145L13.1428 7.43002Z"
        fill="#191F94"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H24V14.8586H0V20.5728Z"
        fill="#2027AC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2857 9.14429H9.71425L9.14282 10.2871H10.2857V9.14429ZM11.4285 9.14429H12.5713V10.2871H11.4286V11.43H10.2857V10.2871H11.4285V9.14429ZM13.7143 9.14429H14.2857L14.8572 10.2871H13.7143V9.14429ZM13.7143 10.2871H12.5714V11.43H13.7143V10.2871ZM11.4285 11.43H12.5713V12.5729H11.4286V13.7157H12.5713V14.8585H11.4285V13.7157H10.2857V12.5729H11.4285V11.43ZM14.8572 12.5729V11.43H13.7143V12.5729H14.8572ZM12.5714 12.5729H13.7143V13.7157H12.5714V12.5729ZM10.2857 11.43H9.14282V12.5729H10.2857V11.43ZM10.2857 14.8585V13.7157H9.14282V14.8585H10.2857ZM14.8572 14.8585V13.7157H13.7143V14.8585H14.8572ZM12.5714 14.8586H13.7143V16.0015H12.5714V14.8586ZM11.4286 14.8586H10.2857V16.0015H11.4286V14.8586Z"
        fill="url(#paint0_linear_54_3408)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_54_3408"
        x1="9.14282"
        y1="9.14429"
        x2="9.14282"
        y2="16.0014"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF212E" />
        <stop offset="1" stopColor="#FD0D1B" />
      </linearGradient>
    </defs>
  </svg>
);

export default HR;
