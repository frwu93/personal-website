import React, { Component } from 'react';
import '../styles/navbar.css';

class Navigation extends Component {
    render() {
      return (
        <div className="nav-container">
          <nav className="navbar">
            <ul className="nav-menu">
              <li><a href="#about" className="nav-links">About</a></li>
              <li><a href="#education" className="nav-links">Education</a></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
  

  export default Navigation; 