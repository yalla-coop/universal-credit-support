const NO = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3250"
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
    <g mask="url(#mask0_54_3250)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.85714 3.42999H0V10.2871H6.85714V3.42999ZM10.2857 3.42999V10.2871H24V3.42999H10.2857ZM24 13.7157H10.2857V20.5728H24V13.7157ZM6.85714 20.5728V13.7157H0V20.5728H6.85714Z"
        fill="#F14247"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.5728H8V20.5728H9.14286V12.5728H24V11.43H9.14286V3.42999H8V11.43H0V12.5728Z"
        fill="#0A3A85"
      />
    </g>
  </svg>
);

export default NO;
