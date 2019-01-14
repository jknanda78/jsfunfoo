import React, { Fragment } from 'react';
import Header from '../header';
import Footer from '../footer';

require('./scss/layout.scss');

const Layout = () => (
  <Fragment>
    <Header />
    <div>
      <section className="branding">
        <h2>Profile of Jyoti K Nanda</h2>
      </section>
      <section className="main">
        main content...
      </section>
    </div>
    <Footer />
  </Fragment>
);

export default Layout;