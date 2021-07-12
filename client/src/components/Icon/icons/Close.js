const Close = ({ width, height, color, ...props }) => (
  <svg
    width={width || '14'}
    height={height || '14'}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 1L1 15M15 15L1 1L15 15Z"
      stroke={color || '#1A202C'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Close;
