const BookMark = ({ width, height, color, strokeColor, ...props }) => (
  <svg
    width={width || '36'}
    height={height || '36'}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.19995 8.19999C8.19995 6.6536 9.45355 5.39999 11 5.39999H25C26.5463 5.39999 27.7999 6.6536 27.7999 8.19999V30.6L18 25.7L8.19995 30.6V8.19999Z"
      fill={color || '#F7FBFF'}
      stroke={strokeColor || '#3B557A'}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BookMark;
