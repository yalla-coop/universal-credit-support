const HT = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    <mask
      id="mask0_54_3034"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_3034)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11.43H24V3.42999H0V11.43Z"
        fill="#112EBC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5728H24V11.43H0V20.5728Z"
        fill="#E3264A"
      />
      <rect
        x="8.00005"
        y="9.14429"
        width="8"
        height="6.85714"
        rx="0.666667"
        fill="url(#paint0_linear_54_3034)"
      />
      <mask
        id="mask1_54_3034"
        maskUnits="userSpaceOnUse"
        x="8"
        y="9"
        width="8"
        height="8"
      >
        <rect
          x="8.00005"
          y="9.14429"
          width="8"
          height="6.85714"
          rx="0.666667"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_54_3034)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.00005 14.8586L9.7227 13.9972C10.093 13.8121 10.5013 13.7157 10.9153 13.7157H13.0848C13.4988 13.7157 13.9071 13.8121 14.2774 13.9972L16 14.8586V16.0014H8.00005V14.8586Z"
          fill="#AABCAE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.66671 15.3347V15.2706L10.0208 14.5935C10.2986 14.4547 10.6048 14.3824 10.9153 14.3824H13.0848C13.3953 14.3824 13.7015 14.4547 13.9792 14.5935L15.3334 15.2706V15.3347H8.66671ZM16 14.8586L14.2774 13.9972C13.9071 13.8121 13.4988 13.7157 13.0848 13.7157H10.9153C10.5013 13.7157 10.093 13.8121 9.7227 13.9972L8.00005 14.8586V16.0014H16V14.8586Z"
          fill="#366C14"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 13.7157C12.9468 13.7157 13.7143 12.9482 13.7143 12.0014C13.7143 11.0546 12.9468 10.2871 12 10.2871C11.0532 10.2871 10.2857 11.0546 10.2857 12.0014C10.2857 12.9482 11.0532 13.7157 12 13.7157Z"
          fill="#D4B872"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.14295 13.3885C9.14295 12.8295 9.78957 12.5187 10.2261 12.868L11.5836 13.954C11.8271 14.1488 12.1731 14.1488 12.4166 13.954L13.7741 12.868C14.2106 12.5187 14.8572 12.8295 14.8572 13.3885V14.1919C14.8572 14.5601 14.5588 14.8586 14.1906 14.8586H9.80962C9.44143 14.8586 9.14295 14.5601 9.14295 14.1919V13.3885Z"
          fill="#C28321"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8139 14.1919L9.80962 13.3885L9.80962 14.1919H10.8139ZM13.1863 14.1919H14.1906V13.3885L13.1863 14.1919ZM10.2261 12.868C9.78957 12.5187 9.14295 12.8295 9.14295 13.3885V14.1919C9.14295 14.5601 9.44143 14.8586 9.80962 14.8586H14.1906C14.5588 14.8586 14.8572 14.5601 14.8572 14.1919V13.3885C14.8572 12.8295 14.2106 12.5187 13.7741 12.868L12.4166 13.954C12.1731 14.1488 11.8271 14.1488 11.5836 13.954L10.2261 12.868Z"
          fill="#0D3488"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8547 10.8561C10.6448 10.6462 10.7935 10.2871 11.0904 10.2871H12.9095C13.2065 10.2871 13.3552 10.6462 13.1452 10.8561L12.2357 11.7657C12.1055 11.8959 11.8945 11.8959 11.7643 11.7657L10.8547 10.8561Z"
          fill="#216C30"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_54_3034"
        x1="8.00005"
        y1="9.14429"
        x2="8.00005"
        y2="16.0014"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#F0F0F0" />
      </linearGradient>
    </defs>
  </svg>
);

export default HT;
