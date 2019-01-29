import React, { Suspense, lazy, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { createBrowserHistory } from 'history';

import Loading from '../common/loading';
import Layout from '../common/layout';
import Header from '../common/header';
import Footer from '../common/footer';

const history = createBrowserHistory(); //eslint-disable-line

const Home = lazy(() => import('../app/home'));
const About = lazy(() => import('../app/about'));
const Blog = lazy(() => import('../app/blog'));
const Contact = lazy(() => import('../app/contact'));


const AppRouter = () => {
  const { pathname: currentPath } = history.location;
  const [pathname, setPathname] = useState(currentPath);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      setPathname(location.pathname);
    });

    return () => {
      unlisten();
    };
  }, [history.location.pathname]);

  return (
    <Router history={history}>
      <Layout header={Header} footer={Footer} pathname={pathname}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default AppRouter;
