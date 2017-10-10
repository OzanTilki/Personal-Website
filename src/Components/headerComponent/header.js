import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
        Logo
        </div>
        <nav>
          <ul>
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="CV">Home</a>
            </li>
            <li>
              <a href="Projects">Home</a>
            </li>
            <li>
              <a href="Contact">Home</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
