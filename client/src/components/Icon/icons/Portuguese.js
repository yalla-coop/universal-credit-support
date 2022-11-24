const Portuguese = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="28" height="20" rx="2" fill="white" />
    <mask
      id="mask0_0_437"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="28"
      height="20"
    >
      <rect width="28" height="20" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_0_437)">
      <rect width="28" height="20" fill="#FF2936" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20H10.6667V0H0V20Z"
        fill="#128415"
      />
      <circle
        cx="10.6667"
        cy="9.99998"
        r="3.33333"
        stroke="#FAF94F"
        strokeWidth="1.33333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33331 8.33333C9.33331 8.14924 9.48255 8 9.66665 8H11.6666C11.8507 8 12 8.14924 12 8.33333V10.6667C12 11.403 11.403 12 10.6666 12C9.93027 12 9.33331 11.403 9.33331 10.6667V8.33333Z"
        fill="white"
      />
      <ellipse cx="10.6667" cy="9.66669" rx="0.666667" ry="1" fill="#1D50B5" />
    </g>
  </svg>
);

export default Portuguese;
