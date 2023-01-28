import React from 'react';
import { NavLink } from 'react-router-dom';
import navLink from '../utils/constants';

const Navbar = () => (
  <div>
    <nav className="">
      <div className="">
        <div className="">
          <div
            className=""
          >
            <h2 className="">BookStore CMS</h2>
          </div>
        </div>

        <div className="">
          <ul className="">
            {navLink.map((link) => (
              <li key={link.name} className="">
                <NavLink
                  to={link ? link.link : '/'}
                  className=""
                >
                  {link.name}
                </NavLink>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
