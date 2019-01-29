import React, { useState, useEffect } from 'react'; //eslint-disable-line
import { Link } from "react-router-dom";

import './scss/header.scss';

const Header = props => {
  const { pathname } = props;
  const [selected, selectNav] = useState(pathname);
  
  useEffect(() => {
    selectNav(pathname);
  }, [pathname]);

  return (
    <header>
      <h1><Link to="/" onClick={() => selectNav('/')}><span>js</span>funfoo</Link></h1>
      <nav>
        <ul>
          <li className={(selected === '/') ? 'selected' : ''}><Link to="/" onClick={() => selectNav('/')}>home</Link></li>
          <li className={(selected === '/about') ? 'selected' : ''}><Link to="/about" onClick={() => selectNav('/about')}>about</Link></li>
          <li className={(selected === '/blog') ? 'selected' : ''}><Link to="/blog" onClick={() => selectNav('/blog')}>blog</Link></li>
          <li className={(selected === '/contact') ? 'selected' : ''}><Link to="/contact" onClick={() => selectNav('/contact')}>contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;