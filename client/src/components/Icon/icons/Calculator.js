const Calculator = ({ width, height, color, ...props }) => (
  <svg
    width={width || '120'}
    height={height || '120'}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M88.6125 11.25H31.3875C26.4791 11.25 22.5 15.2291 22.5 20.1375V99.8625C22.5 104.771 26.4791 108.75 31.3875 108.75H88.6125C93.5209 108.75 97.5 104.771 97.5 99.8625V20.1375C97.5 15.2291 93.5209 11.25 88.6125 11.25Z"
      stroke={color || '#1A202B'}
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M78.075 26.25H41.925C39.4811 26.25 37.5 28.2311 37.5 30.675V44.325C37.5 46.7689 39.4811 48.75 41.925 48.75H78.075C80.5189 48.75 82.5 46.7689 82.5 44.325V30.675C82.5 28.2311 80.5189 26.25 78.075 26.25Z"
      stroke={color || '#1A202B'}
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M82.5 63.75V93.75"
      stroke={color || '#1A202B'}
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M71.25 63.75H60"
      stroke={color || '#1A202B'}
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48.75 63.75H37.5"
      stroke={color || '#1A202B'}
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M71.25 78.75H60"
      stroke={color || '#1A202B'}
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48.75 78.75H37.5"
      stroke={color || '#1A202B'}
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M71.25 93.75H60"
      stroke={color || '#1A202B'}
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48.75 93.75H37.5"
      stroke={color || '#1A202B'}
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Calculator;
