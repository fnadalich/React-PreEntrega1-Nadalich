import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <img src={"./img/logo 1.png"} alt="logo" />
        <nav>
            <ul>
                <li>Reels</li>
                <li>Cañas</li>
                <li>Señuelos</li>                
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar