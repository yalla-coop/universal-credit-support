import React from 'react';
import { Route as RouterRoute } from 'react-router-dom';
import Layout from './../../components/Layout';

const Route = (props) => {
  const { layout, path, Component, exact } = props;

  return (
    <RouterRoute path={path} props exact={exact}>
      <Layout layout={layout} {...props}>
        <Component {...props} />
      </Layout>
    </RouterRoute>
  );
};

export default Route;
