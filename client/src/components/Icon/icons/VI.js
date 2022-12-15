const VI = ({ width, height, color, ...props }) => (
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
      id="mask0_54_2503"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_2503)">
      <rect y="3.42999" width="24" height="17.1429" fill="#EA403F" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14.0071L8.97711 16.1621L10.0925 12.6212L7.10886 10.4122L10.8211 10.3788L12 6.85857L13.1789 10.3788L16.8912 10.4122L13.9076 12.6212L15.0229 16.1621L12 14.0071Z"
        fill="#FFFE4E"
      />
    </g>
  </svg>
);

export default VI;
