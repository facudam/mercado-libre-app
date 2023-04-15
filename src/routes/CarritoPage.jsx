import { useContext } from "react"
import { MeliContext } from "../contexts/meliContext"
import '../styles/CarritoPage.css'
import { Ofertas } from "../sections/Ofertas"

export const CarritoPage = () => {

    const { carritoState } = useContext(MeliContext)
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

                        : <p>Hola</p>
                }       
                
            </div>
          </main>

          <Ofertas titulo='Productos que te pueden interesar' paraBuscar='ropa invierno' />
        </section>
    )
}