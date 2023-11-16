import React from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    const imgCart = "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png";

    return (
        <div>

            <Link to="/cart">
                <img className='imgCart' src={imgCart} alt="Imagen de un carrito" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
                
            </Link>
        </div>
    )
}

export default CartWidget