const Menu2 = ({ width, height, color, ...props }) => (
  <svg
    width={width || '20'}
    height={height || '14'}
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line
      x1="0.921875"
      y1="2"
      x2="20"
      y2="2"
      stroke={color || '#1A202B'}
      strokeWidth="3"
    />
    <line
      x1="0.921875"
      y1="7"
      x2="20"
      y2="7"
      stroke={color || '#1A202B'}
      strokeWidth="3"
    />
    <line
      x1="0.921875"
      y1="12"
      x2="20"
      y2="12"
      stroke={color || '#1A202B'}
      strokeWidth="3"
    />
  </svg>
);

export default Menu2;
