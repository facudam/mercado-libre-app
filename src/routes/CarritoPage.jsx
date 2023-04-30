import { useContext, useEffect } from "react"
import { MeliContext } from "../contexts/meliContext"
import '../styles/CarritoPage.css'
import { Ofertas } from "../sections/Ofertas"
import { ProductInCart } from "../components/ProductInCart"
import { convertToCurrencyFormat } from "../helpers/convertToCurrencyFormat"
import { useNavigate } from "react-router-dom"

export const CarritoPage = () => {

    const { carritoState, setLastProductAdded, getTotalPriceFromCart, productosAComprar, setProductosAComprar } = useContext(MeliContext)

    let pago = convertToCurrencyFormat(getTotalPriceFromCart(carritoState))

    const navigate = useNavigate()

    const comprarProductos = () => {
      setProductosAComprar(carritoState)
      navigate('/checkout/buying')
    }

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
                    onClick={comprarProductos}
                  >
                    Continuar compra
                  </button>
                </div>
              </> 
            }
            
          </main>

          <Ofertas title='Productos que te pueden interesar' toSearch='ropa invierno' />
        </section>
    )
}