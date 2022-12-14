const RO = ({ width, height, color, ...props }) => (
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
      id="mask0_54_1460"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_1460)">
      <rect
        x="11.4286"
        y="3.42999"
        width="12.5714"
        height="17.1429"
        fill="#E5253D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H8V3.42999H0V20.5728Z"
        fill="#0A3D9C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 20.5728H16V3.42999H8V20.5728Z"
        fill="#FFD955"
      />
    </g>
  </svg>
);

export default RO;
