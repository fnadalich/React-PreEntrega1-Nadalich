//Muestra toda la información de los productos
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, stock, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt= {nombre} />
        <h3>Nombre. {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <p>SOTCK: {stock} </p>
        <button> <Link to={`/item/${id}`}> Ver Detalles </Link></button>
        </div>
  )
}

export default Item