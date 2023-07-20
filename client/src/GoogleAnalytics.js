import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const GoogleAnalytics = ({ ReactGA, isProduction }) => {
  const location = useLocation();
  useEffect(() => {
    if (isProduction)
      if (ReactGA?.isInitialized) {
        ReactGA.send({
          hitType: 'pageview',
          page: location.pathname + location.search,
        });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search, ReactGA]);
};

export default GoogleAnalytics;
