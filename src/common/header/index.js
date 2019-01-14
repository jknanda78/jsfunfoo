import React from 'react';

require('./scss/header.scss');

const Header = () => (
  <header>
    <h1>JSFUNFOO</h1>
    <nav>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  </header>
);

export default Header;