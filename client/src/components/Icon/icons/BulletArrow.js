const BulletArrow = ({ width, height, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width || '24'}
    height={width || '24'}
    viewBox="0 0 24 24"
    color={color}
    {...props}
  >
    <path
      fill={color || '#5A666A'}
      d="M21.75 12c0-5.385-4.366-9.75-9.75-9.75-5.385 0-9.75 4.365-9.75 9.75 0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75zm-9.968 4.282a.751.751 0 01-.004-1.06l2.452-2.472H7.97a.75.75 0 110-1.5h6.261l-2.452-2.472a.75.75 0 111.066-1.056l3.721 3.75a.75.75 0 010 1.056l-3.721 3.75a.75.75 0 01-1.062.005z"
    />
  </svg>
);

export default BulletArrow;
