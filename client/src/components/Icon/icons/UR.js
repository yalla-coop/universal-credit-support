const UR = ({ width, height, color, ...props }) => (
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
      y="0.25"
      width="27.5"
      height="19.5"
      rx="1.75"
      fill="white"
      stroke="#F5F5F5"
      strokeWidth="0.5"
    />
    <mask
      id="mask0_0_446"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="28"
      height="20"
    >
      <rect
        x="0.25"
        y="0.25"
        width="27.5"
        height="19.5"
        rx="1.75"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </mask>
    <g mask="url(#mask0_0_446)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 0H8V20H28V0Z"
        fill="#0A632F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.6701 10.7505C23.5418 12.0012 23.0087 13.2029 22.0665 14.1451C19.8206 16.391 16.1005 16.3121 13.7574 13.969C11.4142 11.6258 11.3354 7.90568 13.5812 5.65982C14.5234 4.7176 15.7251 4.18455 16.9758 4.05622C16.5819 4.28838 16.209 4.57485 15.8686 4.91527C13.8269 6.95697 13.7259 10.1662 15.643 12.0833C17.5601 14.0005 20.7694 13.8995 22.8111 11.8578C23.1515 11.5174 23.4379 11.1445 23.6701 10.7505ZM21.0924 8.10469L20.7742 10.0031L19.8849 8.29594L17.981 8.57994L19.3298 7.2066L18.4714 5.48368L20.1943 6.3421L21.5677 4.99328L21.2837 6.89715L22.9909 7.78645L21.0924 8.10469Z"
        fill="white"
      />
    </g>
  </svg>
);

export default UR;
