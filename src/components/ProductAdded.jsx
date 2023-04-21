import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { MeliContext } from "../contexts/meliContext"
import '../styles/ProductAdded.css'

export const ProductAdded = ({ img, title }) => {

    const { carritoState } = useContext(MeliContext)

    return(
        <div className="product-added">
          <div className="product-added-max-width">
            <div className="main-info">
                <div className="main-info__imgs">
                    <img src={ img } className="product-img"/>
                    <div className="check-icon-container">
                        <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    </div>
                    
                </div>
                <div className="main-info__titles">
                    <span>Agregaste a tu carrito</span>
                    <span>{ title }</span>
                </div>
            </div>
            <div className="secondary-info">
                <div className="secondary-info__carrito-values">
                    <span>{ (carritoState.length === 1) 
                                ? `1 producto en tu carrito` 
                                : `${carritoState.length} productos en tu carrito` }
                    </span>
                    <span>$ TOTAL</span>
                    <span>¡Envío gratis!</span>
                </div>
                <div className="secondary-info__carrito-imgs">
                    {
                        carritoState.slice(0,3).map(item => (
                            <div key={ item.id } className="img-carrito-container">
                                <img src={item.thumbnail} />
                            </div>
                        ))
                    }
                    {
                        (carritoState.length > 3) &&
                            <div className={`img-carrito-container z-index`}>+ {carritoState.length - 2}</div>
                    }
                </div>
                <div className="secondary-info__btns">
                    <button>Ver carrito</button>
                    <button>Comprar carrito</button>
                </div>
            </div>
          </div>
        </div>
    )
}