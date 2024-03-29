import { useContext } from 'react'
import { MeliContext } from '../contexts/MeliContext'
import credito from '../images/credit-card.svg'
import debito from '../images/debit-card.svg'
import cuotas from '../images/mercado-creditsv2.svg'
import efectivo from '../images/payment-agreement.svg'
import { MediosDePago } from '../modals/MediosDePago'
import '../styles/PaymentsContainer.css'
import { PaymentData } from '../components/PaymentData'

export const PaymentsContainer = () => {

  const { mediosDePagoIsActive, setMediosDePagoIsActive } = useContext(MeliContext)

  return (
    <section className="payment-data-container">
        <div className='payment-datas'>
            <PaymentData img={ credito } paymentTitle='Tarjeta de crédito' paymentSubtitle='Ver promociones bancarias' />
            <PaymentData img={ debito } paymentTitle='Tarjeta de débito' paymentSubtitle='Ver más' />
            <PaymentData img={ cuotas } paymentTitle='Cuotas sin tarjeta' paymentSubtitle='Conocé Mercado Crédito' />
            <PaymentData img={ efectivo } paymentTitle='Efectivo' paymentSubtitle='Ver más' />
        </div>
        <div className='payment-button'>
          <div className='payment-button__border'>
            <button onClick={() => setMediosDePagoIsActive(true)}>+</button>
          </div>
          
        </div>
        {
          mediosDePagoIsActive && <MediosDePago />
        }
        
    </section>
  )
}
