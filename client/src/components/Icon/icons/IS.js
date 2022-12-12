const IS = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    <mask
      id="mask0_54_3791"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_3791)">
      <rect y="3.42999" width="24" height="17.1429" fill="#0E4CB5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.7157H6.85714V20.5728H10.2857V13.7157H24V10.2871H10.2857V3.42999H6.85714V10.2871H0V13.7157Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.5728H8V20.5728H9.14286V12.5728H24V11.43H9.14286V3.42999H8V11.43H0V12.5728Z"
        fill="#EB363A"
      />
    </g>
  </svg>
);

export default IS;
