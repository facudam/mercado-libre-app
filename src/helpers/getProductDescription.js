
export const getProductDescription = async(id) => {
    const url = `https://api.mercadolibre.com/items/${id}/description`
    const response = await fetch(url)
    const respuesta = await response.json()

    return respuesta
}