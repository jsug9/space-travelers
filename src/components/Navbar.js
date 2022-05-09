import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav>
      <div className="rightNav">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className="link"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
