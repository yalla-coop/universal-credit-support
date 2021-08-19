const Question = ({ width, height, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={width || '24'}
    height={width || '24'}
    color={color}
    {...props}
  >
    <circle cx="8" cy="8" r="8" fill={color || '#3B557A'} />
    <path
      stroke="#fff"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width=".781"
      d="M6.125 6.203s.028-.644.655-1.161c.372-.307.82-.396 1.22-.401.366-.005.693.057.888.152.334.164.987.562.987 1.41 0 .892-.57 1.296-1.218 1.742-.648.445-.813.882-.813 1.383"
    />
    <path
      fill="#fff"
      d="M7.844 11.438a.625.625 0 100-1.25.625.625 0 000 1.25z"
    />
  </svg>
);

export default Question;
