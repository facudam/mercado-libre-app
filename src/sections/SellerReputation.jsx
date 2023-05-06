import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import '../styles/SellerReputation.css'
import { getProductsBySeller } from '../helpers/getProductsBySeller';
import messagePositive from '../images/message-positive.svg'
import timePositive from '../images/time-positive.svg'
import { SimpleLoader } from '../loaders/SimpleLoader';

export const SellerReputation = ({ sellerID }) => {

    const [ reputation, setReputation ] = useState('')

    const getSellerInfo = async() => {
        const info = await getProductsBySeller(sellerID)
        const respuesta = await info.json()
        console.log(respuesta)
        setReputation(info.seller.seller_reputation.power_seller_status)  
    }

    useEffect(() => {
        getSellerInfo()
    }, [ reputation, sellerID ])

  return (
    <section className='buying-info'>
        <h2 className='reputation-h2'>Información sobre el vendedor</h2>
        <div className="seller-reputation">
            <FontAwesomeIcon icon={ faMedal } className='green-color' />
            {
                (!sellerID) ? <SimpleLoader /> :
                <div className='p-container'>
                    <p>{(reputation) && `MercadoLíder ${reputation}` }</p>
                    <p>{(reputation === 'platinum') ? '¡Es uno de los mejores del sitio!' : null}</p>
                </div>
            } 
            
        </div>
        <div className='color-container'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='info-seller-divs'>
            <div>
                <span className='sells'>+1000</span>
                <span id='sells-message'>Ventas en los últimos 60 días</span>
            </div>
            <div>
                <img src={ messagePositive } />
                <span>Brinda buena atención</span>
            </div>
            <div>
                <img src={ timePositive } />
                <span>Despacha sus productos a tiempo</span>
            </div>
        </div>
        <a className='more-data'>Ver más datos de este vendedor</a>
    </section>
  )
}
