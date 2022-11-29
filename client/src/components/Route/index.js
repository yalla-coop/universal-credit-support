import React from 'react';
import Layout from './../../components/Layout';
import { authorization } from '../../helpers';
import { useAuth } from '../../context/auth';
import { useCommon } from '../../context/common';
import { navRoutes } from '../../constants';
import Redirect from './Redirect';

const Route = (props) => {
  useCommon();
  const { isPrivate, layout, Component, allowedRoles, publicOnly } = props;

  const { user } = useAuth();
  if (publicOnly && user.id) {
    return <Redirect to={navRoutes.ADMIN.DASHBOARD} />;
  }

  if (isPrivate) {
    const authorized = authorization(user.role, allowedRoles);

    if (user.id) {
      return (
        <Layout layout={layout} {...props}>
          {authorized ? (
            <Component {...props} />
          ) : (
            <Redirect to={navRoutes.GENERAL.UNAUTHORIZED} {...props} />
          )}
        </Layout>
      );
    }
    return <Redirect to={navRoutes.ADMIN.LOGIN} />;
  }
  return (
    <Layout layout={layout} {...props}>
      <Component layout={layout} {...props} />
    </Layout>
  );
};

export default Route;
