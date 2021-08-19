const Menu = ({ width, height, color, ...props }) => (
  <svg
    width={width || '33'}
    height={height || '32'}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.15625 9.97974H27.8438"
      stroke={color || '#1A202B'}
      strokeWidth="2.0625"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M5.15625 15.9678H27.8438"
      stroke={color || '#1A202B'}
      strokeWidth="2.0625"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M5.15625 21.9556H27.8438"
      stroke={color || '#1A202B'}
      strokeWidth="2.0625"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

export default Menu;
