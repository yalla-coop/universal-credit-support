const SR = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3865"
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
    <g mask="url(#mask0_54_3865)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.8586H24V9.14435H0V14.8586Z"
        fill="#17508F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.14428H24V3.42999H0V9.14428Z"
        fill="#E1444D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.14307 12.0015C5.14307 11.4678 5.41747 10.3018 5.58598 9.63603C5.65968 9.34483 5.92278 9.14435 6.22317 9.14435H8.63558C8.93541 9.14435 9.19818 9.34415 9.27216 9.63471C9.44071 10.2966 9.71449 11.4557 9.71449 12.0015C9.71449 12.6318 9.2967 14.2732 9.17559 14.7357C9.15413 14.8177 9.11735 14.8933 9.0631 14.9584C8.83114 15.2367 8.12996 16.0015 7.42878 16.0015C6.72709 16.0015 6.02539 15.2356 5.79396 14.9578C5.74003 14.893 5.70341 14.818 5.68191 14.7365C5.56074 14.2772 5.14307 12.6474 5.14307 12.0015Z"
        fill="white"
      />
      <mask
        id="mask1_54_3865"
        maskUnits="userSpaceOnUse"
        x="5"
        y="9"
        width="5"
        height="8"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.14307 12.0015C5.14307 11.4678 5.41747 10.3018 5.58598 9.63603C5.65968 9.34483 5.92278 9.14435 6.22317 9.14435H8.63558C8.93541 9.14435 9.19818 9.34415 9.27216 9.63471C9.44071 10.2966 9.71449 11.4557 9.71449 12.0015C9.71449 12.6318 9.2967 14.2732 9.17559 14.7357C9.15413 14.8177 9.11735 14.8933 9.0631 14.9584C8.83114 15.2367 8.12996 16.0015 7.42878 16.0015C6.72709 16.0015 6.02539 15.2356 5.79396 14.9578C5.74003 14.893 5.70341 14.818 5.68191 14.7365C5.56074 14.2772 5.14307 12.6474 5.14307 12.0015Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_54_3865)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6515 9.61167L5.24715 16.3671L4.20599 15.5342L9.61035 8.77875L10.6515 9.61167Z"
          fill="#E1444D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.20604 9.61167L9.61039 16.3671L10.6516 15.5342L5.2472 8.77875L4.20604 9.61167Z"
          fill="#E1444D"
        />
      </g>
    </g>
  </svg>
);

export default SR;
