import { rotator } from '../../../helpers';

const CircleArrow = ({ width, height, color, direction, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width || '24'}
    height={width || '24'}
    viewBox="0 0 24 24"
    color={color}
    style={{
      transform: direction && rotator(direction),
    }}
    {...props}
  >
    <path
      fill={color || '#5A666A'}
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75 5.384 0 9.75 4.365 9.75 9.75 0 5.384-4.366 9.75-9.75 9.75-5.385 0-9.75-4.366-9.75-9.75zm4.72-1.345l4.5 4.5a.75.75 0 001.06 0l4.5-4.5a.75.75 0 00-1.06-1.06L12 13.565l-3.97-3.97a.75.75 0 00-1.06 1.06z"
    />
  </svg>
);

export default CircleArrow;
