import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>FISHER SHOP</h1>
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