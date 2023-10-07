import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCart = "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png";

    return (
        <div>
            <img className='imgCart' src={imgCart} alt="Imagen de un carrito" />
            <strong> 7 </strong>
        </div>
    )
}

export default CartWidget