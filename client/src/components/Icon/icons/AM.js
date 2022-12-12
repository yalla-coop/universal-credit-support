const AM = ({ width, height, color, ...props }) => (
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
      id="mask0_54_3025"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_3025)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9.14428H24V3.42999H0V9.14428Z"
        fill="#20AA46"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H24V14.8586H0V20.5728Z"
        fill="#E92F3B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.8586H24V9.14429H0V14.8586Z"
        fill="#FADF50"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16.0014C14.2092 16.0014 16 14.2105 16 12.0014C16 9.79226 14.2092 8.0014 12 8.0014C9.79091 8.0014 8.00005 9.79226 8.00005 12.0014C8.00005 14.2105 9.79091 16.0014 12 16.0014Z"
        fill="#205CCA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 12.297L12.4454 12.6145L12.281 12.0928L12.7207 11.7672L12.1737 11.7623L12 11.2436L11.8262 11.7623L11.2792 11.7672L11.7189 12.0928L11.5545 12.6145L12 12.297ZM10.3206 14.3129L10.9402 12.3458L9.28265 11.1185L11.345 11.1L12 9.14429L12.6549 11.1L14.7173 11.1185L13.0597 12.3458L13.6793 14.3129L12 13.1157L10.3206 14.3129Z"
        fill="#FFDB3D"
      />
    </g>
  </svg>
);

export default AM;
