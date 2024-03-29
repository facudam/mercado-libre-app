import { useContext, useEffect } from "react"
import { MeliContext } from "../contexts/MeliContext"
import '../styles/CarritoPage.css'
import { Ofertas } from "../sections"
import { Footer, ProductInCart } from "../components"
import { convertToCurrencyFormat } from "../helpers/convertToCurrencyFormat"
import { useNavigate } from "react-router-dom"

export const CarritoPage = () => {

    const { carritoState, setLastProductAdded, getTotalPriceFromCart, buyProduct } = useContext(MeliContext)

    let pago = convertToCurrencyFormat(getTotalPriceFromCart(carritoState))

    const navigate = useNavigate()

    useEffect(() => {
      setLastProductAdded([])
    }, [])

    return(
      <>
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
                                imgUrl={item.thumbnail} 
                                title={item.title}
                                attributes={item.attributes}
                                price={item.price}
                                cantidad={item.quantity}
                                item={item}
                              />
                            ))
                          
                }       
                
            </div>
            {
              (carritoState.length > 0) &&
              <>
                <div className="total-price">
                  <span>Total con envío</span>
                  <span>{ pago }</span>
                </div>
                <div className="total-pay-button">
                  <button
                    onClick={() => buyProduct(carritoState, navigate)}
                  >
                    Continuar compra
                  </button>
                </div>
              </> 
            }
            
          </main>

          
        </section>
        <Footer />
      </>
    )
}