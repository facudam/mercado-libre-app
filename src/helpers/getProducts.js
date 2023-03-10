
export const getProducts = async(busqueda) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`;
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

   
    return resultado.results   
}