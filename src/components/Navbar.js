import React from 'react';
import CoolButton from './CoolButton';

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton isPrimary>Login</CoolButton>
              <CoolButton isLight>Signup</CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
