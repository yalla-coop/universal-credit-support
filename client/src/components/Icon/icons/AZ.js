const AZ = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3361"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_3361)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.14428H24V3.42999H0V9.14428Z"
        fill="#24AAD5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H24V14.8585H0V20.5728Z"
        fill="#21BF75"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.8586H24V9.1443H0V14.8586Z"
        fill="#ED1845"
      />
      <g filter="url(#filter0_d_54_3361)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 13.7157C12.3525 13.7157 12.6802 13.6093 12.9527 13.4268C12.9211 13.4289 12.8893 13.43 12.8572 13.43C12.0682 13.43 11.4286 12.7904 11.4286 12.0014C11.4286 11.2124 12.0682 10.5728 12.8572 10.5728C12.8892 10.5728 12.9211 10.5739 12.9526 10.576C12.6802 10.3935 12.3525 10.2871 12 10.2871C11.0532 10.2871 10.2857 11.0547 10.2857 12.0014C10.2857 12.9482 11.0532 13.7157 12 13.7157ZM13.7142 12.0014C13.7142 12.317 13.4584 12.5728 13.1428 12.5728C12.8272 12.5728 12.5714 12.317 12.5714 12.0014C12.5714 11.6858 12.8272 11.43 13.1428 11.43C13.4584 11.43 13.7142 11.6858 13.7142 12.0014Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_54_3361"
        x="10.2857"
        y="10.2871"
        width="3.42853"
        height="4.42857"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_54_3361"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_54_3361"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default AZ;
