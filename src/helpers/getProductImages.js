
export const getProductImages = async(id) => {
    const url = `https://api.mercadolibre.com/items?ids=${id}`;
    const response = await fetch(url);
    const resultado = await response.json()

    return resultado[0].body.pictures[0].url;
}