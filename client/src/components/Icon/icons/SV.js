const SV = ({ width, height, color, ...props }) => (
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
      id="mask0_54_2732"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_2732)">
      <rect y="3.42999" width="24" height="17.1429" fill="#157CBB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.7157H6.85714V20.5728H10.2857V13.7157H24V10.2871H10.2857V3.42999H6.85714V10.2871H0V13.7157Z"
        fill="#FFD34D"
      />
    </g>
  </svg>
);

export default SV;
