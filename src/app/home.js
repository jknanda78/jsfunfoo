import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import '../scss/home.scss';

const Home = () => (
  <Fragment>
    <section className="branding">
      <div className="intro">
        <h2>javascript blog</h2>
        <p>react, redux, web components</p>
      </div>
    </section>
    <section className="main-content">
      <div className="content-box content">
        <div>
          <h3>about author</h3>
          <p>Seasoned front-end engineer, building HTML5, Multi-Channel, Optimized Single-Page JavaScript Applications.</p>
          <p><Link to="/about">view profile</Link></p>
        </div>
      </div>
      <div className="content-box bg-1" />
      <div className="content-box bg-2" />
      <div className="content-box content">
        <div>
          <h3>publications</h3>
          <ul>
            <li>Building Web Components with HOC's & granular components.</li>
            <li>Code Splitting Async loading of routes and reducers in React/Redux apps.</li>
          </ul>
          <p><Link to="/blog">read more</Link></p>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Home;
