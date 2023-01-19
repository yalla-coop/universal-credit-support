const DA = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3566"
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
    <g mask="url(#mask0_54_3566)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3.42999C0.895431 3.42999 0 4.32542 0 5.42999V10.2871H6.85714V3.42999H2ZM10.2857 3.42999V10.2871H24V5.42999C24 4.32542 23.1046 3.42999 22 3.42999H10.2857ZM24 13.7157H10.2857V20.5728H22C23.1046 20.5728 24 19.6774 24 18.5729V13.7157ZM6.85714 20.5728V13.7157H0V18.5728C0 19.6774 0.89543 20.5728 2 20.5728H6.85714Z"
        fill="#EF264D"
      />
    </g>
  </svg>
);

export default DA;
