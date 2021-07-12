const ArrowDown = ({ width, height, color, ...props }) => (
  <svg
    width={width || '12'}
    height={height || '6'}
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 0.75L6 5.25L10.5 0.75"
      stroke={color || '#0C428D'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowDown;
