const Tick = ({ width, height, color, ...props }) => (
  <svg
    width={width || '27'}
    height={height || '26'}
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line
      x1="1.85897"
      y1="-1.85897"
      x2="27.9418"
      y2="-1.85897"
      transform="matrix(0.635874 -0.771793 0.765338 0.643628 7.81714 25)"
      stroke={color || 'white'}
      strokeWidth="3.71795"
      strokeLinecap="round"
    />
    <line
      x1="1.85897"
      y1="-1.85897"
      x2="9.99954"
      y2="-1.85897"
      transform="matrix(-0.600589 -0.799558 0.793585 -0.60846 9.35535 23.7046)"
      stroke={color || 'white'}
      strokeWidth="3.71795"
      strokeLinecap="round"
    />
  </svg>
);

export default Tick;
