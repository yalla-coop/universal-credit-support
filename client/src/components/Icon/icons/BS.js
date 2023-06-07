const BS = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3087"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_3087)">
      <rect y="3.42999" width="24" height="17.1429" fill="#0B36B2" />
      <g filter="url(#filter0_d_54_3087)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.4285 20.5728V3.42999H7.42853L19.4285 20.5728Z"
          fill="#FFD045"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8572 19.43L14.049 19.6667L14.2857 18.8586L14.049 18.0505L14.8572 18.2872L15.6653 18.0505L15.4286 18.8586L15.6653 19.6667L14.8572 19.43Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5715 16.0015L11.7634 16.2381L12 15.43L11.7634 14.6219L12.5715 14.8586L13.3796 14.6219L13.1429 15.43L13.3796 16.2381L12.5715 16.0015Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2857 12.5729L9.47754 12.8096L9.71424 12.0014L9.47754 11.1933L10.2857 11.43L11.0938 11.1933L10.8571 12.0014L11.0938 12.8096L10.2857 12.5729Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9.14428L7.19188 9.38097L7.42858 8.57285L7.19188 7.76473L8 8.00142L8.80813 7.76473L8.57143 8.57285L8.80813 9.38097L8 9.14428Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.71433 5.71575L4.90621 5.95244L5.1429 5.14432L4.90621 4.3362L5.71433 4.57289L6.52245 4.3362L6.28576 5.14432L6.52245 5.95244L5.71433 5.71575Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_54_3087"
        x="7.42853"
        y="3.42999"
        width="12"
        height="17.1429"
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
        <feOffset />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_54_3087"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_54_3087"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default BS;
