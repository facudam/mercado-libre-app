import { useContext, useEffect, useState } from 'react'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/BuyPage.css'
import { MeliContext } from '../contexts/meliContext';
import { CompraFinalizada } from '../modals';
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat';

export const BuyPage = () => {

    const { isCompraFinalizadaModalActive, setIsCompraFinalizadaModalActive,productosAComprar,  getTotalPriceFromCart, setShowProductsComparison } = useContext(MeliContext)
    const [ btnMessage, setBtnMessage ] = useState('Confirmar Compra')

    useEffect(() => {
        document.querySelector('body').style.backgroundColor = "rgb(238, 238, 238)"
        setBtnMessage('Confirmar Compra')
        setShowProductsComparison(false)
      }, [])

    const confirmarCompra = () => {
        setBtnMessage('Procesando compra')
        document.documentElement.style.setProperty("--display", "block")
        setTimeout(() =>{
            setIsCompraFinalizadaModalActive(true)
        }, 2500)
    }

    return(
      <>
        <section className='BuyPage'>
            <div className="receive-purchase">
                <h1>¿Cómo querés recibir tu compra?</h1>
                <h2>Domicilio</h2>
                <div className="receive-purchase__domicilio">
                    <div className='receive-purchase__main-dom'>
                        <div className='location-img-container'>
                            <FontAwesomeIcon icon={faLocationDot} className='fontIcon' />
                        </div>
                        <div className='receive-purchase__domicilio-info'>
                            <h3>Av. La Plata 2345</h3>
                            <span>C.P 1234 - Capital Federal</span>
                            <span>José Pérez - 1123244355</span>
                        </div>
                    </div>
                    
                    <a>Editar o elegir otro</a>
                </div>
                <h2>Recibir compra</h2>
                <div className='receive-purchase__recibir'>
                    <div className='checkbox-container'>
                        <input type='checkbox' />
                        <span className='checkbox-span'>Llega gratis en 48 horas a tu domicilio</span>
                    </div>
                    <span className='green'>Gratis</span>
                </div>
                <h2>Retirar compra</h2>
                <div className='receive-purchase__retirar'>
                    <div className='receive-purchase__retirar-children'>
                        <input type='checkbox' />
                        <div className='checkbox-space-between'>
                            <div className='checkbox-container__info'>
                                <span className='checkbox-span'>Retiro en correo y otros puntos</span>
                                <span className='checkbox-span2'>Llega en 48 horas</span>
                            </div>
                            <span className='green'>Gratis</span>
                        </div>
                        
                    </div>
                    <div className='receive-purchase__retirar-children'>
                        <input type='checkbox' />
                        <div className='checkbox-container__info'>
                            <span className='checkbox-span'>El domicilio del vendedor</span>
                            <span className='checkbox-span2'>Llega en 48 horas</span>
                        </div>
                    </div>
                </div>
                <div className='beneficio-m-p'>
                    <img src='https://icongr.am/fontawesome/trophy.svg?size=16&color=currentColor' />
                    <span>Beneficio Mercado Puntos</span>
                </div>
            </div>
            <div className='purchase-summary'>
                <h2>Resumen compra</h2>
                <div className='purchase-summary__info'>
                    <div className='purchase-summary__info-span-container'>
                        <span>Productos ({ productosAComprar.length })</span>
                        <span>{convertToCurrencyFormat(getTotalPriceFromCart(productosAComprar))}</span>
                    </div>
                    <div className='purchase-summary__info-span-container'>
                        <span>Envío</span>
                        <span className='green'>Gratis</span>
                    </div>
                </div>
                <div className={`purchase-summary__info-span-container padding-20-0`}>
                    <span>Total</span>
                    <span>{convertToCurrencyFormat(getTotalPriceFromCart(productosAComprar))}</span>
                </div>
                
                <button className='buy-btn' onClick={ confirmarCompra }>
                    { btnMessage }
                </button>
                
                
            </div>
        </section>
        {
            isCompraFinalizadaModalActive && <CompraFinalizada productos={productosAComprar} />
        }
      </>
    )
}