
export const convertToCurrencyFormat = (price) => {
    // Utilizamos el objet Intl.NumberFormat de javascript para darle formato de moneda:
    const formatear = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
      });
      //Luego utilizamos el método format para formatear el numero que pedimos como parámetro:
      return formatear.format(price)
}