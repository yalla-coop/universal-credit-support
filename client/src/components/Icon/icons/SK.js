const SK = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="0.25"
      y="3.67999"
      width="23.5"
      height="16.6429"
      rx="1.75"
      fill="white"
      stroke="#F5F5F5"
      strokeWidth="0.5"
    />
    <mask
      id="mask0_54_2642"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect
        x="0.25"
        y="3.67999"
        width="23.5"
        height="16.6429"
        rx="1.75"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </mask>
    <g mask="url(#mask0_54_2642)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.8586H24V9.14429H0V14.8586Z"
        fill="#0C47B7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H24V14.8586H0V20.5728Z"
        fill="#E53B35"
      />
      <path
        d="M6.14019 6.19188C5.06553 6.19188 4.18297 7.04115 4.14167 8.11502L3.93004 13.6174C3.90656 14.2277 4.16325 14.8153 4.62697 15.2128L6.83599 17.1062C7.83463 17.9622 9.30824 17.9622 10.3069 17.1062L12.5159 15.2128C12.9796 14.8153 13.2363 14.2277 13.2128 13.6174L13.0012 8.11502C12.9599 7.04115 12.0773 6.19188 11.0027 6.19188H6.14019Z"
        fill="#F73744"
        stroke="white"
        strokeWidth="1.33333"
      />
      <mask
        id="mask1_54_2642"
        maskUnits="userSpaceOnUse"
        x="3"
        y="5"
        width="11"
        height="14"
      >
        <path
          d="M6.14019 6.19188C5.06553 6.19188 4.18297 7.04115 4.14167 8.11502L3.93004 13.6174C3.90656 14.2277 4.16325 14.8153 4.62697 15.2128L6.83599 17.1062C7.83463 17.9622 9.30824 17.9622 10.3069 17.1062L12.5159 15.2128C12.9796 14.8153 13.2363 14.2277 13.2128 13.6174L13.0012 8.11502C12.9599 7.04115 12.0773 6.19188 11.0027 6.19188H6.14019Z"
          fill="white"
          stroke="white"
          strokeWidth="1.33333"
        />
      </mask>
      <g mask="url(#mask1_54_2642)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99998 12.9061C7.99998 12.722 7.85074 12.5728 7.66664 12.5728H6.61902C6.43493 12.5728 6.28569 12.4236 6.28569 12.2395V11.7633C6.28569 11.5792 6.43493 11.4299 6.61902 11.4299H7.66664C7.85074 11.4299 7.99998 11.2807 7.99998 11.0966V10.6204C7.99998 10.4363 7.85074 10.2871 7.66664 10.2871H7.19045C7.00636 10.2871 6.85712 10.1378 6.85712 9.95375V9.47756C6.85712 9.29347 7.00636 9.14423 7.19045 9.14423H7.66664C7.85074 9.14423 7.99998 8.99499 7.99998 8.8109V8.33471C7.99998 8.15061 8.14921 8.00137 8.33331 8.00137H8.8095C8.9936 8.00137 9.14283 8.15061 9.14283 8.33471V8.8109C9.14283 8.99499 9.29207 9.14423 9.47617 9.14423H9.95236C10.1365 9.14423 10.2857 9.29347 10.2857 9.47756V9.95375C10.2857 10.1378 10.1365 10.2871 9.95236 10.2871H9.47617C9.29207 10.2871 9.14283 10.4363 9.14283 10.6204V11.0966C9.14283 11.2807 9.29207 11.4299 9.47617 11.4299H10.5238C10.7079 11.4299 10.8571 11.5792 10.8571 11.7633V12.2395C10.8571 12.4236 10.7079 12.5728 10.5238 12.5728H9.47617C9.29207 12.5728 9.14283 12.722 9.14283 12.9061V14.5252C9.14283 14.7093 8.9936 14.8585 8.8095 14.8585H8.33331C8.14922 14.8585 7.99998 14.7093 7.99998 14.5252V12.9061Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.53984 14.9375C6.15039 15.1565 5.14286 15.8058 5.14286 16.5729C5.14286 17.5197 6.67788 18.2872 8.57143 18.2872C10.465 18.2872 12 17.5197 12 16.5729C12 15.8058 10.9925 15.1565 9.60307 14.9376C9.41911 14.5529 9.02631 14.2871 8.57146 14.2871C8.1166 14.2871 7.72381 14.5529 7.53984 14.9375Z"
          fill="#1251A1"
        />
      </g>
    </g>
  </svg>
);

export default SK;
