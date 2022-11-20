const Refresh = ({ width, height, color, ...props }) => (
  <svg
    width={width || '20'}
    height={height || '20'}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 3V7.375H3.50883M16.9458 9.125C16.5153 5.67198 13.5697 3 10 3C7.06229 3 4.54726 4.80965 3.50883 7.375M3.50883 7.375H7.375M17 17V12.625H16.4912M16.4912 12.625C15.4527 15.1904 12.9377 17 10 17C6.43033 17 3.48474 14.328 3.05416 10.875M16.4912 12.625H12.625"
      stroke="#1A202B"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Refresh;
