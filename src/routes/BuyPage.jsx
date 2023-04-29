import { useEffect } from 'react'
import location from '../images/location-outline.svg'
import '../styles/BuyPage.css'

export const BuyPage = ({ productos }) => {

    useEffect(() => {
        document.querySelector('body').style.backgroundColor = "rgb(238, 238, 238)"
      }, [])


    return(
        <section className='BuyPage'>
            <div className="receive-purchase">
                <h1>¿Cómo querés recibir tu compra?</h1>
                <h2>Domicilio</h2>
                <div className="receive-purchase__domicilio">
                    <div className='location-img-container'>
                        <img src={ location } alt='location'/>
                    </div>
                    
                    <div className='receive-purchase__domicilio-info'>
                        <h3>Av. La Plata 2345</h3>
                        <span>C.P 1234 - Capital Federal</span>
                        <span>José Perez - 1123244355</span>
                    </div>
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
                    <span>Productos (1)</span>
                    <span>$1310.00</span>
                </div>
                <div className='purchase-summary__info'>
                    <span>Envío</span>
                    <span>Gratis</span>
                </div>
                <div className='purchase-summary__info'>
                    <span>Total</span>
                    <span>$1310.00</span>
                </div>
                <button>
                    Confirmar Compra
                </button>
            </div>
        </section>
    )
}