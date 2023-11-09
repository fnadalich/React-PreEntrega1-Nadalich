import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className={"logo"} src={"../img/logo 2.png"} alt="logo" />
      </Link>

      <nav>
        <ul>

          <li>
            <NavLink to="categoria/RE"> Reels </NavLink>
          </li>

          <li>
            <NavLink to="categoria/CA"> Cañas </NavLink>
          </li>

          <li>
            <NavLink to="categoria/SE"> Señuelos </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar