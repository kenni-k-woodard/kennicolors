import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Color1</NavLink>
          </li>
          <li>
            <NavLink to="/">Color2</NavLink>
          </li>
          <li>
            <NavLink to="/">Color3</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
