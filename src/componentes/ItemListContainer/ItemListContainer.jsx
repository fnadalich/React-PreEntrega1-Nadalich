//Componente que engloba toda la lógica de la petición
import { useState, useEffect } from "react";
import { getProductos, getProdByCat } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); //arranca con un array vacío
  
  const {idCategoria} =useParams();

  useEffect(() => {

const funcionProductos = idCategoria ? getProdByCat : getProductos;

funcionProductos(idCategoria)
.then(res => setProductos(res))

  }, [idCategoria])

  return (
    <>
      <h2 style={{ textAlign: "center" }}> Mis Productos </h2>
      <ItemList productos = {productos} />
    </>
  )
}

export default ItemListContainer