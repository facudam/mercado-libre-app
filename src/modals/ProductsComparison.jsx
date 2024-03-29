import ReactDOM from 'react-dom'
import '../styles/ProductsComparison.css'
import { useContext, useEffect, useState } from 'react'
import { MeliContext } from '../contexts/MeliContext'
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat'
import { Link, useNavigate } from 'react-router-dom'
import { getRecommendedProduct } from '../helpers/RecommendedProduct/index'
import { getSellerFullInfo } from '../helpers/getSellerFullInfo'

export const ProductsComparison = () => {

    const { productsToCompare, setProductsToCompare, setShowProductsComparison, addProductToCart, cantidadItem, buyProduct, itemNameForPage, changeItemPageValues } = useContext(MeliContext)
    
    const navigate = useNavigate()

    const [ recommendedProduct, setRecommendedProduct ] = useState([getRecommendedProduct(productsToCompare)])
    
    const ComprarProducto = (producto) => {
        producto.quantity = cantidadItem
        buyProduct([producto], navigate)
    }

    const agregarAlCarrito = (producto) => {
        producto.quantity = cantidadItem;
        addProductToCart(producto)
        document.documentElement.style.setProperty('--display', 'flex')
        setTimeout(() => {
            document.documentElement.style.setProperty('--display', 'none')
        }, 2000)
    }

    const showReputationSeller = async(producto) => {
        const reputacion = await getSellerFullInfo(producto.seller_id)

        if (reputacion.power_seller_status === null) {
            return 'sin reputación'
        } else if (reputacion.power_seller_status === 'platinum') {
            return 'Platinum: Uno de los mejores'
        } else {
            return reputacion.power_seller_status
        } 
    }

    const addColorReputation = async(producto) => {
        const reputacion = await getSellerFullInfo(producto.seller_id)
        if (reputacion.power_seller_status === 'platinum') {
            return 'platinum'
        } else if (reputacion.power_seller_status === 'gold'){
            return 'gold-reputation'
        } else if (reputacion.power_seller_status === 'silver') {
            return 'silver-reputation'
        } else {
            return 'no-reputation'
        }
    }

    const vaciarLista = () => {
        setProductsToCompare([])
        setShowProductsComparison(false)
    }

    const eliminarProducto = (id) => {
        setProductsToCompare(productsToCompare.filter( item => item.id !== id))
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--display', 'none')
        
    }, [])

    useEffect(() => {
        (productsToCompare.length < 1) && setShowProductsComparison(false)
        
        setRecommendedProduct([getRecommendedProduct(productsToCompare)])
        
    }, [ productsToCompare ])

    return ReactDOM.createPortal(
      <> 
        <div className='full-screen'></div> 
        <div className='products-comparison'>
            <div className='products-comparison__btn-ctn'>
                <button onClick={() => setShowProductsComparison(false)}>Cerrar</button>
            </div>
            <table className=''>
                <tbody>
                    <tr>
                        <th>Producto</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Cantidad vendidos</th>
                        <th>Reputación del vendedor</th>
                        <th>Cantidad de estrellas</th>
                        <th>
                            <button 
                                onClick={ vaciarLista }
                                className='vaciar-lista'><img src='https://icongr.am/jam/trash.svg?size=25&color=ffffff' /> 
                            </button>
                            <div className='check-for-btn'><span>¡AÑADIDO!</span>
                            </div>
                        </th>
                    </tr>
                    {
                        productsToCompare.map((producto) => (
                            <tr key={producto.id}>
                                <td>
                                    <Link 
                                        onMouseOver={() => changeItemPageValues(producto.id, producto.title)}
                                        to={`/item/${producto.id}/${itemNameForPage}`}>
                                        <img 
                                            className={(recommendedProduct[0].id === producto.id) && `heartbeat`}
                                            src={producto.thumbnail} 
                                        />
                                            {(recommendedProduct[0].id === producto.id) && <span className={`recommended-product`}>¡Recomendado!</span>}
                                    </Link>
                                </td>
                                <td>{producto.attributes[0].value_name}</td>
                                <td>
                                    <img src='https://icongr.am/fontawesome/money.svg?size=37&color=1aab17' alt='money' />
                                    <img src='https://icongr.am/fontawesome/money.svg?size=37&color=1aab17' alt='money' />
                                    {convertToCurrencyFormat(producto.price)}
                                </td>
                                <td>
                                    <span>{producto.sold_quantity}</span>
                                    <img src='https://icongr.am/material/cart.svg?size=60&color=beb6b6' />  
                                </td>
                                <td className={addColorReputation(producto)}>{showReputationSeller(producto)}</td>
                                <td>
                                    <img className='star-reputation' src='https://icongr.am/octicons/star-fill.svg?size=55&color=ffd700' alt='icon-star' />
                                    {Number.parseFloat(producto.seller.seller_reputation.transactions.ratings.positive * 5).toFixed(1)}
                                </td>
                                <td className='td-btns'>
                                    <button onClick={() => ComprarProducto(producto)} className='buy-product-btn'>Comprar ahora</button>
                                    <button onClick={() => agregarAlCarrito(producto)} className='add-to-cart-btn'>Añadir al carrito</button>
                                    <button onClick={() => eliminarProducto(producto.id)}
                                    className='delete-btn'>Eliminar</button>   
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
      </>
      ,
      document.getElementById('portal')
    )
}