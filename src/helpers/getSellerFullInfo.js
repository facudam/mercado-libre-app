export const getSellerFullInfo = async(id) => {
    try {
        const url = `https://api.mercadolibre.com/users/${id}`
        const response = await fetch(url)
        const resultado = await response.json()

        return resultado
    } catch (error) {
        throw new Error(`Ha ocurrido un error: ${error}`)
    }
}