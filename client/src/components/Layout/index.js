import React from 'react';
import PropTypes from 'prop-types';

import General from './General';
import SplitScreen from './SplitScreen';
import Dashboard from './Dashboard';

const Layout = ({ layout, ...props }) => {
  switch (layout) {
    case 'dashboard':
      return <Dashboard {...props} />;
    case 'splitScreen':
      return <SplitScreen {...props} />;
    case 'step':
    case 'general':
    default:
      return <General {...props} />;
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
