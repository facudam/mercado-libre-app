import promoImg1 from '../images/mercadoPuntos1.jpg'
import promoImg2 from '../images/mercadoPuntos2.webp'
import promoImg3 from '../images/mercadoPuntos3.jpg'
import promoImg4 from '../images/mercadoPuntos4.jpg'
import combo from '../images/combo-disney.jpg'
import hbo from '../images/hbo.png'
import paramount from '../images/paramount.png'

import '../styles/MercadoPuntosSection.css'

export const MercadoPuntosSection = () => {
    return(
        <section className="mercado-puntos-section">
            <div className="mercado-puntos__title">
                <h2>Beneficios de Mercado Puntos</h2>
                <a href="">Ver todos los beneficios</a>
            </div>
            <div className='mercado-puntos__promos'>
                <div className='promo'>
                    <img src={promoImg1} alt='' />
                    <div className='info-promo'>
                        <img src={combo} alt='' />
                        <div>
                            <p>Sin cargo con el nivel 6</p>
                            <p>Disney+ y Star+</p>
                        </div>
                    </div>
                </div>
                <div className='promo'>
                    <img src={promoImg2} alt='' />
                    <div className='info-promo'>
                        <img src={hbo} alt='' />
                        <div>
                            <p>Hasta 50% OFF</p>
                            <p>HBO Max</p>
                        </div>
                    </div>
                </div>
                <div className='promo'>
                    <img src={promoImg3} alt='' />
                    <div className='info-promo'>
                        <img src={paramount} alt='' />
                        <div>
                            <p>Hasta 50% OFF</p>
                            <p>Paramount+</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='search-promo'>
                <img src={ promoImg4 } />
                <div className='search-promo__invitacion'>
                    <div>
                        <p>LO MEJOR DE HP</p>
                        <p>ESTÁ AQUÍ</p>
                    </div>
                    
                    <div className='anchors-search-promo'>
                        <a href=''>Ver más</a>
                        <p id='anchors-search-promo__p'> &gt; </p>
                    </div>
                </div>
            </div>
        </section>
    )
}