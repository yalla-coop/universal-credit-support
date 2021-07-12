import React from 'react';
import PropTypes from 'prop-types';

import General from './General';

const Layout = ({ layout, ...props }) => {
  switch (layout) {
    case 'general':
    default:
      return <General {...props} />;
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
