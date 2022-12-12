const SI = ({ width, height, color, ...props }) => (
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
      id="mask0_54_1808"
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.42999" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_54_1808)">
      <rect y="3.42999" width="24" height="17.1429" fill="#FFBF19" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14285 4.57278H21.5238C22.2602 4.57278 22.8571 5.16974 22.8571 5.90612V18.0966C22.8571 18.833 22.2602 19.4299 21.5238 19.4299H9.14285V4.57278Z"
        fill="#A52531"
      />
      <path
        d="M1.14285 5.90612C1.14285 5.16974 1.73981 4.57278 2.47619 4.57278H4.57142V19.4299H2.47619C1.73981 19.4299 1.14285 18.833 1.14285 18.0966V5.90612Z"
        fill="#03664F"
      />
      <rect
        x="4.57144"
        y="4.57278"
        width="3.42857"
        height="14.8571"
        rx="0.666667"
        fill="#FF6816"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5714 6.2871C20.5714 6.60269 20.8273 6.85852 21.1429 6.85852C21.4585 6.85852 21.7143 6.60269 21.7143 6.2871V5.71567H21.1429C20.8273 5.71567 20.5714 5.97151 20.5714 6.2871ZM11.4286 6.2872C11.4286 6.60279 11.1727 6.85863 10.8571 6.85863C10.5415 6.85863 10.2857 6.60279 10.2857 6.2872V5.71577H10.8571C11.1727 5.71577 11.4286 5.97161 11.4286 6.2872ZM21.1429 17.1443C20.8273 17.1443 20.5714 17.4001 20.5714 17.7157C20.5714 18.0313 20.8273 18.2872 21.1429 18.2872H21.7143V17.7157C21.7143 17.4001 21.4585 17.1443 21.1429 17.1443ZM11.4286 17.7157C11.4286 17.4001 11.1727 17.1443 10.8571 17.1443C10.5416 17.1443 10.2857 17.4001 10.2857 17.7157V18.2872H10.8571C11.1727 18.2872 11.4286 18.0313 11.4286 17.7157Z"
        fill="#FFBF18"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7143 14.2074C13.7143 13.9358 13.4942 13.7157 13.2226 13.7157C13.1698 13.7157 13.1174 13.7073 13.0677 13.6895C12.737 13.5713 11.4286 13.0721 11.4286 12.5729C11.4286 12.2846 11.5739 11.9964 11.718 11.7815C11.8698 11.5552 11.9296 11.2662 11.8343 11.0108C11.6394 10.4882 11.3514 9.60737 11.4286 9.14429C11.4635 8.93456 11.5841 8.74617 11.7346 8.58569C12.0648 8.23378 12.5714 8.54507 12.5714 9.02759V11.018C12.5714 11.2705 12.7141 11.5013 12.9399 11.6143L13.4672 11.8779C13.6147 11.9517 13.793 11.9227 13.9096 11.8061C14.0947 11.6211 14.044 11.3092 13.81 11.1922L13.1429 10.8586V10.2871C13.4275 10.2871 13.5181 9.90336 13.2635 9.77605L13.1429 9.71572V9.14429H14.0096C14.1864 9.14429 14.3559 9.07405 14.481 8.94903L14.6619 8.76812C14.7869 8.6431 14.9565 8.57286 15.1333 8.57286H15.588C15.8405 8.57286 16.0713 8.71553 16.1843 8.94139L16.4479 9.46873C16.527 9.62687 16.54 9.80995 16.4841 9.97769L16.2925 10.5525C16.1486 10.9842 16.4699 11.43 16.9249 11.43H18.6713C18.7903 11.43 18.9044 11.3827 18.9885 11.2986C19.205 11.0821 19.1458 10.7172 18.8719 10.5803L18.4265 10.3575C18.3339 10.3112 18.2318 10.2871 18.1283 10.2871H17.8095C17.4413 10.2871 17.1429 9.98867 17.1429 9.62048V9.42043C17.1429 9.24362 17.2131 9.07405 17.3381 8.94903L17.7143 8.57286V9.14429C17.7143 9.45988 17.9701 9.71572 18.2857 9.71572H19.0165C19.2691 9.71572 19.4999 9.85839 19.6128 10.0842L19.9465 10.7516C19.9819 10.8224 20.0044 10.8983 20.0115 10.977C20.0385 11.279 20.097 12.0876 20 12.5729C19.9234 12.9556 19.7153 13.3113 19.5725 13.521C19.4844 13.6505 19.4286 13.8015 19.4286 13.9581V15.5649C19.4286 15.806 19.2331 16.0014 18.992 16.0014C18.6675 16.0014 18.4565 15.6599 18.6016 15.3697L18.7968 14.9792C18.8348 14.9033 18.8348 14.8139 18.7968 14.7379L18.7698 14.684C18.6492 14.4428 18.2857 14.5286 18.2857 14.7982C18.2857 14.8379 18.2765 14.877 18.2587 14.9125L17.8555 15.7189C17.769 15.8921 17.592 16.0014 17.3984 16.0014C17.0185 16.0014 16.7713 15.6016 16.9413 15.2618L17.0725 14.9993C17.1188 14.9068 17.1429 14.8047 17.1429 14.7012V14.3824C17.1429 14.0142 16.8444 13.7157 16.4762 13.7157H15.5238C15.1556 13.7157 14.8571 14.0142 14.8571 14.3824V14.7012C14.8571 14.8047 14.833 14.9068 14.7868 14.9993L14.427 15.7189C14.3404 15.8921 14.1634 16.0014 13.9698 16.0014C13.5899 16.0014 13.3428 15.6016 13.5127 15.2618L13.6439 14.9993C13.6902 14.9068 13.7143 14.8047 13.7143 14.7012V14.2074Z"
        fill="#FFBF18"
      />
    </g>
  </svg>
);

export default SI;
