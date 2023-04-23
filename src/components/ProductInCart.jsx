import { useContext, useState } from 'react'
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat'
import '../styles/ProductInCart.css'
import { MeliContext } from '../contexts/meliContext'

export const ProductInCart = ({ imgUrl, title, attributes, price, item }) => {
    const { setCantidadItem, deleteProductFromCart, modifyQuantityProduct } = useContext(MeliContext)
    const [unidades, setUnidades] = useState(item.quantity)

    const modifyQuantityForItem = (operator) => {
        (operator === '-') ? setUnidades(unidades - 1) : setUnidades(unidades + 1)
        item.quantity = unidades;
        const cantidad = item.quantity
        modifyQuantityProduct(item, cantidad )
    }

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
                    <span onClick={() => deleteProductFromCart(item) }>Eliminar</span>
                    <span>Más productos del vendedor</span>
                    <span>Comprar ahora</span>
                </div>
            </div>
        </div>
        <div className='item-quantity-button'>
            <button onClick={() => modifyQuantityForItem('-', item)}>-</button>
            <span>{unidades}</span>
            <button onClick={() => modifyQuantityForItem('+', item)}>+</button>
        </div>
        <div className='item-price'>
            <span>{ convertToCurrencyFormat(price) }</span>
        </div>
    </div>
  )
}
