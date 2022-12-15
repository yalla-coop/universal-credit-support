const ML = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3601"
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
    <g mask="url(#mask0_54_3601)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.14428H24V3.42999H0V9.14428Z"
        fill="#FFA44A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H24V14.8586H0V20.5728Z"
        fill="#1A9F0B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13.7157C12.9468 13.7157 13.7143 12.9482 13.7143 12.0014C13.7143 11.0547 12.9468 10.2871 12 10.2871C11.0532 10.2871 10.2857 11.0547 10.2857 12.0014C10.2857 12.9482 11.0532 13.7157 12 13.7157Z"
        fill="#181A93"
        fillOpacity="0.15"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.381 12.0014C14.381 13.3164 13.315 14.3824 12 14.3824C10.685 14.3824 9.61905 13.3164 9.61905 12.0014C9.61905 10.6865 10.685 9.62048 12 9.62048C13.315 9.62048 14.381 10.6865 14.381 12.0014ZM13.7143 12.0014C13.7143 12.9482 12.9468 13.7157 12 13.7157C11.0532 13.7157 10.2857 12.9482 10.2857 12.0014C10.2857 11.0547 11.0532 10.2872 12 10.2872C12.9468 10.2872 13.7143 11.0547 13.7143 12.0014Z"
        fill="#181A93"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 12.5728C12.3156 12.5728 12.5715 12.317 12.5715 12.0014C12.5715 11.6858 12.3156 11.43 12 11.43C11.6845 11.43 11.4286 11.6858 11.4286 12.0014C11.4286 12.317 11.6845 12.5728 12 12.5728Z"
        fill="#181A93"
      />
    </g>
  </svg>
);

export default ML;
