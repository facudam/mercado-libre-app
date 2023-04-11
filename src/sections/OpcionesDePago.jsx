
import mercadoCreditoLogo from '../images/mercadocreditologo.svg'
import visa from '../images/visa.svg'
import american from '../images/american.svg'
import mastercard from '../images/mastercard.svg'
import naranja from '../images/naranja.svg'
import maestroDebito from '../images/maestroDebito.svg'
import masterDebito from '../images/mastercard-debito.svg'
import cabalDebito from '../images/cabal-debito.svg'
import visaDebito from '../images/visa-debito.svg'
import rapipago from '../images/rapipago.svg'
import pagoFacil from '../images/pagofacil.svg'
import '../styles/OpcionesDePago.css'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const OpcionesDePago = () => {
  return (
    <section className={`buying-info opciones-de-pago`}>
        <h2 className='reputation-h2'>Medios de pago</h2>
        <div className='cuotas-container'>
            <FontAwesomeIcon icon={faCreditCard} />
            <span>¡Pagá el mismo precio en <b>hasta 9 cuotas</b>!</span>
        </div>
        <h3>Hasta 12 cuotas sin tarjeta</h3>
        <img src={mercadoCreditoLogo} />
        <h3>Tarjetas de crédito</h3>
        <div className='opciones-de-pago__tarjetas'>
            <img src={visa} />
            <img src={american} />
            <img src={naranja} />
            <img src={mastercard} />
        </div>
        
        <h3>Tarjetas de débito</h3>
        <div className='opciones-de-pago__tarjetas'>
            <img src={visaDebito} />
            <img src={maestroDebito} />
            <img src={masterDebito} />
            <img src={cabalDebito} />
        </div>
        
        <h3>Efectivo</h3>
        <div className='opciones-de-pago__tarjetas'>
            <img src={pagoFacil} />
            <img src={rapipago} />
        </div>
        
        <a className={`more-data opciones-de-pago__anchor`}>Conocé otros medios de pago</a>
    </section>
  )
}
