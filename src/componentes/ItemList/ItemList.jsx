//Agrupador de un set de componentes ítems
import Item from "../Item/Item";
import './Itemlist.css'

const ItemList = ({ productos }) => {
    return (
        <div className='contenedorProductos'>
            {productos.map(item => <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemList