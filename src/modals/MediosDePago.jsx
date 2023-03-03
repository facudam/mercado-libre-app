import { useContext } from "react"
import ReactDOM from "react-dom"
import { MeliContext } from "../contexts/meliContext"
import mercadoCreditoLogo from '../images/mercadocreditologo.svg'
import '../styles/MediosDePago.css'

export const MediosDePago = () => {

    const { mediosDePagoIsActive, setMediosDePagoIsActive } = useContext(MeliContext);

    return ReactDOM.createPortal(
        <div>
            <div onClick={() => setMediosDePagoIsActive(false)} className="full-screen"></div>
            <div className="medios-de-pago-modal">
                <div className="header-modal">
                    <span>Medios de pago</span>
                    <button onClick={() => setMediosDePagoIsActive(false)}>x</button>
                </div>

                <p className="payment-modal-subtitle">Podés pagar tus compras con cualquiera de estos medios. Es rápido y seguro, siempre.</p>
                <div className="separator"></div>
                <div className="mercado-credito-section">
                    <div> <img src={ mercadoCreditoLogo } alt='mercado crédito logo' /> </div>
                    <div>
                        <p>¡Compra en cuotas sin tarjeta!</p>
                        <p>Activa Mercado Crédito, es 100% online y sin costos de mantenimiento.</p>
                    </div>
                    <div>
                        <button>Activar ahora</button>
                    </div>
                </div>
                
            </div>
        </div>,
        document.getElementById('portal')
    )
}




