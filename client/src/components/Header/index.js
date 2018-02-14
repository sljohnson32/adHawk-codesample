import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header>Beer Force One</header>
        <Nav />
      </div>
    );
  }
}

export default Header;
