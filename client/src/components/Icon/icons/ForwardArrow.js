const ForwardArrow = ({ width, height, color, ...props }) => (
  <svg
    width={width || '24'}
    height={height || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12ZM11.782 16.2825C11.7121 16.2131 11.6565 16.1307 11.6184 16.0398C11.5804 15.949 11.5606 15.8515 11.5602 15.753C11.5598 15.6545 11.5788 15.5569 11.6162 15.4657C11.6535 15.3745 11.7084 15.2916 11.7778 15.2217L14.2303 12.75H7.96875C7.76984 12.75 7.57907 12.671 7.43842 12.5303C7.29777 12.3897 7.21875 12.1989 7.21875 12C7.21875 11.8011 7.29777 11.6103 7.43842 11.4697C7.57907 11.329 7.76984 11.25 7.96875 11.25H14.2303L11.7778 8.77828C11.7084 8.70829 11.6535 8.62532 11.6162 8.53411C11.5789 8.4429 11.5599 8.34523 11.5604 8.24669C11.5608 8.14814 11.5806 8.05064 11.6188 7.95977C11.6569 7.86889 11.7125 7.78641 11.7825 7.71703C11.8525 7.64766 11.9355 7.59275 12.0267 7.55544C12.1179 7.51813 12.2155 7.49915 12.3141 7.49958C12.5131 7.50046 12.7036 7.58037 12.8438 7.72172L16.5652 11.4717C16.7046 11.6122 16.7828 11.8021 16.7828 12C16.7828 12.1979 16.7046 12.3878 16.5652 12.5283L12.8438 16.2783C12.7744 16.3484 12.6918 16.4041 12.6009 16.4422C12.51 16.4804 12.4124 16.5002 12.3138 16.5006C12.2151 16.501 12.1174 16.4819 12.0262 16.4445C11.9349 16.4071 11.852 16.352 11.782 16.2825Z"
      fill={color || '#FC6244'}
    />
  </svg>
);

export default ForwardArrow;
