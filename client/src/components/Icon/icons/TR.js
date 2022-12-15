const TR = ({ width, height, color, ...props }) => (
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
      id="mask0_54_2515"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_2515)">
      <rect y="3.42999" width="24" height="17.1429" fill="#E92434" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3036 12.6601L15.2537 13.9329L15.3253 12.2845L13.7903 11.6794L15.3801 11.238L15.4813 9.59118L16.3923 10.9668L17.9898 10.5541L16.9631 11.8457L17.8492 13.2375L16.3036 12.6601Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9167 15.1592C13.9756 16.3673 12.5071 17.1443 10.8572 17.1443C8.01685 17.1443 5.71431 14.8418 5.71431 12.0014C5.71431 9.16112 8.01685 6.85858 10.8572 6.85858C12.5071 6.85858 13.9755 7.63554 14.9166 8.84353C14.1904 8.31577 13.2774 8.00142 12.2858 8.00142C9.91883 8.00142 8.00005 9.79228 8.00005 12.0014C8.00005 14.2106 9.91883 16.0014 12.2858 16.0014C13.2775 16.0014 14.1905 15.687 14.9167 15.1592Z"
        fill="white"
      />
    </g>
  </svg>
);

export default TR;
