import ReactDOM from 'react-dom'
import '../styles/ProductsComparison.css'
import { useContext, useEffect } from 'react'
import { MeliContext } from '../contexts/meliContext'
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat'
import { Link, useNavigate } from 'react-router-dom'

export const ProductsComparison = () => {

    const { productsToCompare, setProductsToCompare, setShowProductsComparison, addProductToCart, cantidadItem, buyProduct, itemNameForPage, changeItemPageValues } = useContext(MeliContext)
    
    const navigate = useNavigate()

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

    const showReputationSeller = (producto) => {
        if (producto.seller.seller_reputation.power_seller_status === null) {
            return 'sin reputación'
        } else if (producto.seller.seller_reputation.power_seller_status === 'platinum') {
            return 'Platinum: Uno de los mejores'
        } else {
            return producto.seller.seller_reputation.power_seller_status
        } 
    }

    const addColorReputation = (producto) => {
        if (producto.seller.seller_reputation.power_seller_status === 'platinum') {
            return 'platinum'
        } 
        if (producto.seller.seller_reputation.power_seller_status === 'gold'){
            return 'gold-reputation'
        }
        if (producto.seller.seller_reputation.power_seller_status === 'silver') {
            return 'silver-reputation'
        }
    }

    const vaciarLista = () => {
        setProductsToCompare([])
        setShowProductsComparison(false)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--display', 'none')
    }, [])

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
                        <th>PRODUCTO</th>
                        <th>MARCA</th>
                        <th>PRECIO</th>
                        <th>CANTIDAD VENDIDOS</th>
                        <th>REPUTACIÓN VENDEDOR</th>
                        <th>CANTIDAD DE ESTRELLAS</th>
                        <th>
                            <button 
                                onClick={ vaciarLista }
                                className='vaciar-lista'>Vaciar lista
                            </button>
                            <div className='check-for-btn'><span>¡AÑADIDO!</span>
                            </div>
                        </th>
                    </tr>
                    {
                        productsToCompare.map(producto => (
                            <tr key={producto.id}>
                                <td><Link 
                                        onMouseOver={() => changeItemPageValues(producto.id, producto.title)}
                                        to={`/item/${producto.id}/${itemNameForPage}`}>
                                        <img src={producto.thumbnail} />
                                    </Link>
                                </td>
                                <td>{producto.attributes[0].value_name}</td>
                                <td>{convertToCurrencyFormat(producto.price)}</td>
                                <td>{producto.sold_quantity}</td>
                                <td className={addColorReputation(producto)}>{showReputationSeller(producto)}</td>
                                <td>{Number.parseFloat(producto.seller.seller_reputation.transactions.ratings.positive * 5).toFixed(1)}</td>
                                <td>
                                    <button onClick={() => ComprarProducto(producto)} className='buy-product-btn'>Comprar ahora</button>
                                    <button onClick={() => agregarAlCarrito(producto)} className='add-to-cart-btn'>Añadir al carrito</button>   
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