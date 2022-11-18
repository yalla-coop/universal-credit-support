const German = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="3.42856" width="24" height="17.1429" rx="1.71429" fill="white" />
    <mask
      id="mask0_0_55"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42856" width="24" height="17.1429" rx="1.71429" fill="white" />
    </mask>
    <g mask="url(#mask0_0_55)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.14284H24V3.42856H0V9.14284Z"
        fill="#262626"
      />
      <g filter="url(#filter0_d_0_55)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 14.8571H24V9.14285H0V14.8571Z"
          fill="#F01515"
        />
      </g>
      <g filter="url(#filter1_d_0_55)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 20.5714H24V14.8571H0V20.5714Z"
          fill="#FFD521"
        />
      </g>
    </g>
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
    <rect opacity="0.01" width="24" height="24" fill="#D8D8D8" />
    <defs>
      <filter
        id="filter0_d_0_55"
        x="0"
        y="9.14285"
        width="24"
        height="5.71429"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          result="effect1_dropShadow_0_55"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_0_55"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_0_55"
        x="0"
        y="14.8571"
        width="24"
        height="5.71429"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          result="effect1_dropShadow_0_55"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_0_55"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default German;
