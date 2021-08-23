import React from 'react';
import { Route as RouterRoute, Redirect } from 'react-router-dom';
import Layout from './../../components/Layout';
import { authorization } from '../../helpers';
import { useAuth } from '../../context/auth';
import { navRoutes } from '../../constants';

const Route = (props) => {
  const { isPrivate, layout, path, Component, exact, allowedRoles } = props;

  const { user } = useAuth();

  if (isPrivate) {
    const authorized = authorization(user.role, allowedRoles);

    if (user.id) {
      return (
        <Layout layout={layout} {...props}>
          <RouterRoute path={path} props exact={exact}>
            {authorized ? (
              <Component {...props} />
            ) : (
              <Redirect to={navRoutes.GENERAL.UNAUTHORIZED} {...props} />
            )}
          </RouterRoute>
        </Layout>
      );
    }
    return <Redirect to={navRoutes.GENERAL.LOGIN} />;
  }

  return (
    <RouterRoute path={path} props exact={exact}>
      <Layout layout={layout} {...props}>
        <Component layout={layout} {...props} />
      </Layout>
    </RouterRoute>
  );
};

export default Route;
