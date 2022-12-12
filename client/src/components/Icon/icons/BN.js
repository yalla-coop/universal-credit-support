const BN = ({ width, height, color, ...props }) => (
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
      id="mask0_54_2133"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_2133)">
      <rect y="3.42999" width="24" height="17.1429" fill="#128363" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8572 17.1443C13.6975 17.1443 16 14.8417 16 12.0014C16 9.16109 13.6975 6.85855 10.8572 6.85855C8.01683 6.85855 5.71429 9.16109 5.71429 12.0014C5.71429 14.8417 8.01683 17.1443 10.8572 17.1443Z"
        fill="#F23C53"
      />
    </g>
  </svg>
);

export default BN;
