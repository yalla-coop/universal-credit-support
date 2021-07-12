import React from 'react';
import PropTypes from 'prop-types';

import General from './General';
import Steps from './Steps';

const Layout = ({ layout, ...props }) => {
  switch (layout) {
    case 'steps':
      return <Steps {...props} />;
    case 'general':
    default:
      return <General {...props} />;
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
