import React from 'react';

import NavLink from './nav-link';

import './nav.css';

export default function Nav(props) {
  const { NavLink } = props;
  return (
    <nav role="navigation">
      <ul class="navTabs">
        <NavLink />
        <NavLink />
        <NavLink />
        <NavLink />
        <NavLink />

        {/* <li><a href="">Home</a></li>
        <li><a href="">Map</a></li>
        <li><a href="">Meetups</a></li>
        <li><a href="">Register</a></li>
        <li><a href="">Login</a></li> */}
      </ul>
    </nav>
  )
}

//Change ahref to LINK To ??