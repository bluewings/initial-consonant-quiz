import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home, { uriPattern as home_path } from './home';
import About, { uriPattern as about_path } from './about';
import Layout from '../components/Layout';

const pages = [
  {
    name: 'Home',
    path: home_path,
    Component: Home,
  },
  {
    name: 'About',
    path: about_path,
    Component: About,
  },
];

const REDIRECT_URI = home_path;

const Routes = (() => {
  const routes = [
    ...pages.map(({ exact, path, Component }: any, i) => (
      <Route
        key={`route-${i}`}
        exact={!!exact}
        path={path}
        render={(routeProps: any) => <Component {...routeProps} />}
      />
    )),
    <Redirect key="redirect-to-default" to={REDIRECT_URI} />,
  ];
  return () => (
    <Layout>
      <Switch>{routes}</Switch>
    </Layout>
  );
})();

export default pages;

export { Routes };
