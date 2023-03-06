import { useContext, useEffect } from "react"
import { MeliContext } from "../contexts/meliContext"


export const Ofertas = () => {

    const { productosEnOferta, setProductosEnOferta } = useContext(MeliContext)

    useEffect(() => {
        const getProducts = async () => {
            const url = "https://api.mercadolibre.com/sites/MLA/search?q=ofertas"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            //console.log(resultado.results)

            const listaDeProductos = resultado.results.map(producto => {
                const productosObject = {
                    titulo: producto.title,
                    id: producto.id,
                    imagen: producto.variations_data[0].thumbnail,
                    precio: producto.price,
                    precioAnterior: producto.original_price,
                    descuento: producto.discounts,
                    cuotas: producto.installments.quantity,
                    precioCuota: producto.installments.amount, 
                }
                return productosObject
            })
            setProductosEnOferta(listaDeProductos) 
        }
       
        getProducts();
    }, [])

    

  return (
    <section>
        {
            
        }
    </section>
  )
}
