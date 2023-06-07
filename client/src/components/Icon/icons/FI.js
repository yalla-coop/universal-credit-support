const FI = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3105"
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
    <g mask="url(#mask0_54_3105)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-1.1429 13.7157H6.8571V21.7157H10.2857V13.7157H25.1428V10.2872H10.2857V2.28717H6.8571V10.2872H-1.1429V13.7157Z"
        fill="#0848A6"
      />
    </g>
  </svg>
);

export default FI;
