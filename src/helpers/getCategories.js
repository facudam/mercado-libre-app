
export const getCategories = async () => {
    const url = 'https://api.mercadolibre.com/sites/MLA/categories';
    const response = await fetch(url);
    const data = await response.json()

    return data
}