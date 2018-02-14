import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <Link to="/">Taps Page</Link>
        <Link to="/data-upload">Upload Beer Data</Link>
      </div>
    );
  }
}

export default Nav;
