import '../styles/ProductInCart.css'

export const ProductInCart = ({ imgUrl, title, attributes, price }) => {
  return (
    <div className='product-in-cart'>
        <div className="item-info">
            <div className='item-info__img'>
                <img src={ imgUrl } />
            </div>
            <div className="item-info__main">
                <h2>{ title }</h2>
                <div className='item-info__main-attributes'>
                    <span>{attributes[0].name}: {attributes[0].value_name}</span>
                    <span>{attributes[1].name}: {attributes[1].value_name}</span>
                    <span>{attributes[2].name}: {attributes[2].value_name}</span>
                </div>
                <div className='item-info__main-span'>
                    <span>Eliminar</span>
                    <span>Más productos del vendedor</span>
                    <span>Comprar ahora</span>
                </div>
            </div>
        </div>
        <div className='item-quantity-button'>
            <button>-</button>
            <span>1</span>
            <button>+</button>
        </div>
        <div className='item-price'>
            <span>$ { price }</span>
        </div>
    </div>
  )
}
