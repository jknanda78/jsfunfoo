import React from 'react';

import './scss/layout.scss';

const Layout = ({ header, footer, children, ...restProps }) => (
  <div className="container">
    {header(restProps)}
    <main>
      {children}
    </main>
    {footer()}
  </div>
);

export default Layout;