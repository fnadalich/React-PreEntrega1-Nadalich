const misProductos = [
    {id: "R01", nombre: "Reel", precio: 45000, img: "./img/Reeles/reel 1.webp" },
    {id: "R02", nombre: "Reel", precio: 46000, img: "./img/Reeles/reel 2.webp" },
    {id: "R03", nombre: "Reel", precio: 42000, img: "./img/Reeles/reel 3.webp" },
    {id: "C01", nombre: "Caña", precio: 35000, img: "./img/Cañas/caña 1.webp" },
    {id: "C02", nombre: "Caña", precio: 28000, img: "./img/Cañas/caña 2.webp" },
    {id: "C03", nombre: "Caña", precio: 33000, img: "./img/Cañas/caña 3.webp" },
    {id: "S01", nombre: "Señuelo", precio: 28000, img: "./img/Señuelos/señuelo 1.webp" },
    {id: "S02", nombre: "Señuelo", precio: 19000, img: "./img/Señuelos/señuelo 2.webp" },
    {id: "S03", nombre: "Señuelo", precio: 21000, img: "./img/Señuelos/señuelo 3.webp" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(misProductos);
    }, 500)
})
}