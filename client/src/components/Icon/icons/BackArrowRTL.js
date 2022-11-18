const BackArrowRTL = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.8901 10.9531L5.40187 10.9531C4.62764 10.9531 4 11.5926 4 12.3815C4 13.1704 4.62764 13.8099 5.40187 13.8099L19.5647 13.8099L17.862 15.5683C17.3182 16.1298 17.3241 17.0342 17.8752 17.5883C18.4263 18.1424 19.3139 18.1364 19.8577 17.5749L23.596 13.7146C24.1372 13.1557 24.1343 12.2564 23.5894 11.7012L19.8511 7.89206C19.3036 7.33422 18.416 7.33422 17.8685 7.89206C17.3211 8.4499 17.3211 9.35433 17.8685 9.91217L18.8901 10.9531Z"
      fill="#1A202B"
    />
  </svg>
);

export default BackArrowRTL;