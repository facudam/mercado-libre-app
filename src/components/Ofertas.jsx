import { useContext, useEffect } from "react"
import { MeliContext } from "../contexts/meliContext"
import { getProducts } from "../helpers/getProducts"
import { ProductoContainer } from "./ProductoContainer"


export const Ofertas = () => {

    const { productosEnOferta, setProductosEnOferta } = useContext(MeliContext)

    const getInfoProducts = async() => {
            const listaProductos = await getProducts('oferta');
            setProductosEnOferta(listaProductos)
            
        }

    useEffect(() => {    
        getInfoProducts()
    }, [])
    
    
  return (
    <section>
        {
            productosEnOferta.map(producto => {
              
           return (
                <ProductoContainer
                    key={ producto.id} 
                    img={producto.id}
                    title={producto.title}
                    price={producto.price}
                    descuento={producto.discounts}
                    cuotas={producto.installments.quantity}
                    envio='Envío gratis'
                />
                
            ) })  
        }
    </section>
  )
}
