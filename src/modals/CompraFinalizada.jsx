import ReactDOM from "react-dom"
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/CompraFinalizada.css'
import { useContext } from "react";
import { MeliContext } from "../contexts/meliContext";
import { useNavigate } from "react-router-dom";

export const CompraFinalizada = ({productos}) => {

    const { setIsCompraFinalizadaModalActive, setProductosAComprar } = useContext(MeliContext)

    const navigate = useNavigate()

    const salirDeCompra = () => {
        setProductosAComprar([])
        document.documentElement.style.setProperty("--display", "none")
        setIsCompraFinalizadaModalActive(false)
        navigate('/')
    }

    return ReactDOM.createPortal(
        <div>
            <div className="full-screen"></div>
            <div className="compra-finalizada">
                <div className="compra-finalizada__header">
                    <div>
                        <span>¡Tu compra ha sido exitosa!</span>
                        <span>Te avisaremos cuando tus productos estén en camino</span>
                    </div>
                    <div>
                        <img src="https://icongr.am/fontawesome/briefcase.svg?size=39&color=3484fa" />
                        <div id="check-ctn">
                            <img src="https://icongr.am/fontawesome/check.svg?size=16&color=ffffff" />
                        </div>
                        
                    </div>
                </div>
                <div className="compra-finalizada__productos">
                    <div className="compra-finalizada__productos-ctn">
                        <span>{productos.length > 1 ? 'Llegan' : 'Llega'} en 48 horas a tu domicilio</span>
                        {
                            productos.map(item => (
                                <div key={item.id} className="item-comprado-ctn">
                                    <div className="item-comprado-ctn__img">
                                        <img src={item.thumbnail} />
                                    </div>
                                    <div className="item-comprado-ctn__info">
                                        <span>{item.title}</span>
                                        <span>Unidades: {item.quantity}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                    <button 
                        onClick={salirDeCompra}
                        className="compra-finalizada__btn">
                        Continuar
                    </button>
                </div>
                
            </div>
        </div>,
        document.getElementById('portal')
    )
}