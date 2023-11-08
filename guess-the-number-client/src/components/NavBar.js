import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Guess The Number Game</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/play" className="nav-link">Play</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/high-scores" className="nav-link">High Scores</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
