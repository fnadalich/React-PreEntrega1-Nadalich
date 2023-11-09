const misProductos = [
    { id: "R01", nombre: "Reel", stock: 18, precio: 45000, img: "../img/Reeles/reel 1.webp", idCat: "RE" },
    { id: "R02", nombre: "Reel", stock: 11, precio: 46000, img: "../img/Reeles/reel 2.webp", idCat: "RE" },
    { id: "R03", nombre: "Reel", stock: 19, precio: 42000, img: "../img/Reeles/reel 3.webp", idCat: "RE" },
    { id: "C01", nombre: "Caña", stock: 25, precio: 35000, img: "../img/Cañas/caña 1.webp", idCat: "CA" },
    { id: "C02", nombre: "Caña", stock: 11, precio: 28000, img: "../img/Cañas/caña 2.webp", idCat: "CA" },
    { id: "C03", nombre: "Caña", stock: 31, precio: 33000, img: "../img/Cañas/caña 3.webp", idCat: "CA" },
    { id: "S01", nombre: "Señuelo", stock: 46, precio: 28000, img: "../img/Señuelos/señuelo 1.webp", idCat: "SE" },
    { id: "S02", nombre: "Señuelo", stock: 78, precio: 19000, img: "../img/Señuelos/señuelo 2.webp", idCat: "SE" },
    { id: "S03", nombre: "Señuelo", stock: 44, precio: 21000, img: "../img/Señuelos/señuelo 3.webp", idCat: "SE" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
}

export const getProdByCat = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}