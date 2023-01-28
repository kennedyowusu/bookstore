import React from 'react';
import { NavLink } from 'react-router-dom';
import navLink from '../utils/constants';
import '../styles/navbar.css';
import IconButton from './IconButton';

const Navbar = () => (
  <nav className="navbar">
    <NavLink className="brand">
      <h2 className="brand-title">BookStore CMS</h2>
    </NavLink>

    <div className="nav-link-container">
      <ul className="nav-links">
        {navLink.map((link) => (
          <li key={link.name} className="nav-link">
            <NavLink to={link ? link.link : '/'} className="active-link">
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <IconButton name="person" />
    </div>
  </nav>
);

export default Navbar;
