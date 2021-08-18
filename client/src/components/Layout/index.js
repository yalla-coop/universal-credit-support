import React from 'react';
import PropTypes from 'prop-types';

import General from './General';
import SplitScreen from './SplitScreen';

const Layout = ({ layout, ...props }) => {
  switch (layout) {
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
