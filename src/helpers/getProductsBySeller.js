
export const getProductsBySeller = async(id) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${id}`
    const response = await fetch(url)
    const resultado = await response.json()

    return resultado
}