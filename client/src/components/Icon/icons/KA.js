const KA = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3754"
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
    <g mask="url(#mask0_54_3754)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7143 21.7157H10.2857V13.7157H-1.14291V10.2871H10.2857V2.28716H13.7143V10.2871H25.1428V13.7157H13.7143V21.7157Z"
        fill="#FF2B37"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5144 7.20138L17.1429 7.42996V6.28711L18.5144 6.51568L18.2858 5.14427H19.4286L19.2001 6.51567L20.5715 6.28711V7.42996L19.2001 7.2014L19.4286 8.57284H18.2858L18.5144 7.20138Z"
        fill="#FD0D1B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.80004 7.20138L3.42856 7.42996V6.28711L4.80003 6.51568L4.57146 5.14427H5.71432L5.48575 6.51567L6.85713 6.28711V7.42996L5.48575 7.2014L5.71432 8.57284H4.57146L4.80004 7.20138Z"
        fill="#FD0D1B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.80004 17.4871L3.42856 17.7157V16.5728L4.80003 16.8014L4.57146 15.43H5.71432L5.48575 16.8014L6.85713 16.5728V17.7157L5.48575 17.4871L5.71432 18.8586H4.57146L4.80004 17.4871Z"
        fill="#FD0D1B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5144 17.4871L17.1429 17.7157V16.5728L18.5144 16.8014L18.2858 15.43H19.4286L19.2001 16.8014L20.5715 16.5728V17.7157L19.2001 17.4871L19.4286 18.8586H18.2858L18.5144 17.4871Z"
        fill="#FD0D1B"
      />
    </g>
  </svg>
);

export default KA;
