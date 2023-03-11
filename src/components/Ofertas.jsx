import { useContext, useEffect } from "react"
import { MeliContext } from "../contexts/meliContext"
import { getProducts } from "../helpers/getProducts"
import { ProductoContainer } from "./ProductoContainer"
import '../styles/Ofertas.css'


export const Ofertas = () => {

    const { productosEnOferta, setProductosEnOferta } = useContext(MeliContext)

    const getInfoProducts = async() => {
            const listaProductos = await getProducts('oferta');
            setProductosEnOferta(listaProductos)
            
        }

    useEffect(() => {    
        getInfoProducts()
    }, [])
    
    console.log(productosEnOferta)
  return (
    <section className="ofertas_section">

        <div className="ofertas-title">
            <h2 className="ofertas-title__h2">Ofertas</h2>
            <a className="ofertas-title__anchor" href="">Ver todas</a>
        </div>
        
        
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
                    precioCuota={producto.installments.amount}
                />
                
            ) })  
        }
    </section>
  )
}
