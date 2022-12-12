const MN = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3620"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_3620)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00006 20.5728H16.0001V3.42999H8.00006V20.5728Z"
        fill="#146BBC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H8V3.42999H0V20.5728Z"
        fill="#E43642"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9999 20.5728H23.9999V3.42999H15.9999V20.5728Z"
        fill="#E43642"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.00001 12.0014L4.57144 12.5729H3.42858L4.00001 12.0014ZM2.28568 13.7157H3.42853V17.1443H2.28568V13.7157ZM4.57144 13.7157H5.7142V17.1443H4.57134V16.0016L4.00001 17.1443L3.42858 16.0014H4.57134V15.4404C4.56579 15.7512 4.31212 16.0014 4.00001 16.0014C3.68442 16.0014 3.42858 15.7456 3.42858 15.43C3.42858 15.1144 3.68441 14.8585 4 14.8585L3.42858 13.7157H3.99484C3.68163 13.7129 3.42858 13.4582 3.42858 13.1443C3.42858 12.8287 3.68442 12.5729 4.00001 12.5729C4.3156 12.5729 4.57144 12.8287 4.57144 13.1443C4.57144 13.4582 4.31839 13.7129 4.00518 13.7157H4.57134H4.57144ZM4.00002 14.8585C4.31213 14.8585 4.56579 15.1088 4.57134 15.4195V13.7159L4.00002 14.8585Z"
        fill="url(#paint0_linear_54_3620)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_54_3620"
        x1="2.28568"
        y1="12.0014"
        x2="2.28568"
        y2="17.1443"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F8D246" />
        <stop offset="1" stopColor="#F9CE2F" />
      </linearGradient>
    </defs>
  </svg>
);

export default MN;
