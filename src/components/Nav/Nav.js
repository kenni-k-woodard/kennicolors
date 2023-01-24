import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/69/54/125">Color1</NavLink>
          </li>
          <li>
            <NavLink to="/118/168/146">Color2</NavLink>
          </li>
          <li>
            <NavLink to="/191/142/167">Color3</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
