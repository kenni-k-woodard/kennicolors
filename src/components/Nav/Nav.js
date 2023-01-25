import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/10/53/33">Green Revolution</NavLink>
          </li>
          <li>
            <NavLink to="/222/21/27">Red Menace</NavLink>
          </li>
          <li>
            <NavLink to="/1/44/148">Blue Ruin</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
