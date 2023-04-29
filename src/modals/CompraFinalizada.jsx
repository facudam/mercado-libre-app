import ReactDOM from "react-dom"
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/CompraFinalizada.css'
import { useContext } from "react";
import { MeliContext } from "../contexts/meliContext";

export const CompraFinalizada = ({productos}) => {

    const { isCompraFinalizadaModalActive, setIsCompraFinalizadaModalActive } = useContext(MeliContext)

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
                    <span>Llegan en 48 horas a tu domicilio</span>
                    {
                        productos.map(item => (
                            <div key={item.id} className="item-comprado-ctn">
                                <div className="item-comprado-ctn__img">
                                    <img src={item.thumbnail} />
                                </div>
                                <div className="item-comprado.ctn__info">
                                    <span>{item.title}</span>
                                    <span>Unidades: {item.quantity}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="compra-finalizada__btn">Continuar</button>
            </div>
        </div>,
        document.getElementById('portal')
    )
}