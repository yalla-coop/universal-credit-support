const Add = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={width || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11.8309" cy="11.6625" r="10.7557" fill={color || '#FC6244'} />
    <g clip-path="url(#clip0)">
      <path
        d="M12 6.75V17.25M17.25 12H6.75H17.25Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="16.9706"
          height="16.9706"
          fill="white"
          transform="translate(0 12) rotate(-45)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default Add;
