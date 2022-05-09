import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h3>Space Travelers</h3>
      <ul>
        <Link to="/">Rockets</Link>
        <Link to="/missions">Missions  | </Link>
        <Link to="/profile">My Profile</Link>
      </ul>
    </nav>
  );
}

export default Navbar;