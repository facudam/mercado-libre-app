
export const ProductoContainer = ({img, title, price, descuento, cuotas, envio}) => {
  return (
    <div className="main-container">
        <div>
          <img src={ img } alt={`imagen del producto ${title}`} width='224' />
        </div>
        <div>
            <div>
                <span>$ { price }</span>
                <span>{ descuento }</span>
            </div>
            <span>{ cuotas }</span>
            <span>{ envio }</span>
            <span>{ title }</span>
        </div>
    </div>
  )
}
