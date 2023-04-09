import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import '../styles/SellerReputation.css'
import { getProductsBySeller } from '../helpers/getProductsBySeller';

export const SellerReputation = ({ sellerID }) => {

    const [ reputation, setReputation ] = useState('')

    const getSellerInfo = async() => {
        const info = await getProductsBySeller(sellerID)
        setReputation(info.seller.seller_reputation)
        
    }

    useEffect(() => {
        getSellerInfo()
    }, [ reputation, sellerID ])

  if (!reputation) console.log('..cargando informacion')
  return (
    <section className="buying-info">
        <h2 className='reputation-h2'>Información sobre el vendedor</h2>
        <div className="seller-reputation">
            <FontAwesomeIcon icon={faMedal} className='green-color' />
            <div>
                <p>{(!reputation) ? '' :  `MercadoLíder ${reputation.power_seller_status}` }</p>
                <p>{(reputation.power_seller_status === 'platinum') ? '¡Es uno de los mejores del sitio!' : null}</p>
            </div>
        </div>
    </section>
  )
}
