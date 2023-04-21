import { useContext, useEffect } from "react"
import { MeliContext } from "../contexts/meliContext"
import '../styles/CarritoPage.css'
import { Ofertas } from "../sections/Ofertas"
import { ProductInCart } from "../components/ProductInCart"

export const CarritoPage = () => {

    const { carritoState,setLastProductAdded } = useContext(MeliContext)

    useEffect(() => {
      setLastProductAdded([])
    }, [])

    return(
        <section className="carrito-section">
          <main className="carrito-page">
            <ul>
                <li className={` carrito-page-li active`}>Carrito ({ carritoState.length })</li>
                <li className={` carrito-page-li `}>Guardados (0)</li>
            </ul>
            <div>
                {
                    (carritoState.length === 0)
                        ? <div className="carrito-page__info">
                            <span>Tu carrito está vacío</span>
                            <span>¿No sabés qué comprar? ¡Miles de productos te esperan!</span>
                            <button>Descubrir ofertas</button>
                          </div>

                        : 
                            carritoState.map(item => (
                              <ProductInCart
                                key={item.id}
                                imgUrl={item.secure_thumbnail} 
                                title={item.title}
                                attributes={item.attributes}
                                price={item.price}
                              />
                            ))
                          
                }       
                
            </div>
            {
              (carritoState.length > 0) &&
              <>
                <div className="total-price">
                  <span>Total con envío</span>
                  <span>$ 20000</span>
                </div>
                <div className="total-pay-button">
                  <button>Continuar compra</button>
                </div>
              </> 
            }
            
          </main>

          <Ofertas titulo='Productos que te pueden interesar' paraBuscar='ropa invierno' />
        </section>
    )
}