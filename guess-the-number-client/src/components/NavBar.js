import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
