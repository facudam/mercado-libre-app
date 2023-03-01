import '../styles/PaymentData.css'

export const PaymentData = ({ img, paymentTitle, paymentSubtitle, link }) => {
  return (
    <div className="payment-data">
        <div className="payment-data__img">
            <img src={ img } alt='payment-img' />
        </div>
        <div className="payment-data__titles">
            <div className='payment-title'>{ paymentTitle }</div>
            <div className='payment-subtitle'><a href={ link }>{ paymentSubtitle }</a></div>
        </div>
    </div>
  )
}
