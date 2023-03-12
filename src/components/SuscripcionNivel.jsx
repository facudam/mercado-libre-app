import disneyPlus from '../images/disneyplus.svg'
import starplus from '../images/starplus.svg'
import camion from '../images/camion.png'
import '../styles/SuscripcionNivel.css'

export const SuscripcionNivel = () => {

    return(
        <section className="suscripcion">
            <div className="title-section">
                <div>Suscribite al nivel 6</div>
                <div>
                    <p>$1.439</p>
                    <p>$499 <span>/mes</span></p>
                </div>
            </div>
            <div className="benefits-section">
                <p>Conseguí los mejores beneficios en Mercado Libre</p>
                <div className="benefits">
                    <div className='benefits__info'>
                        <img src={ disneyPlus } alt="" />
                        <p>Disney+ sin cargo</p>
                    </div>
                    <div className='benefits__info'>
                        <img src={ starplus } alt="" />
                        <p>Star+ sin cargo</p>
                    </div>
                    <div className='benefits__info'>
                        <img src={ camion } alt="" />
                        <p>Envíos gratis y rápidos desde $ 8.000 y 45% OFF en envíos de menos de $ 8.000</p>
                    </div>
                </div>
            </div>
            <div className="button-section">
                <button>Suscribite</button>
            </div>
        </section>
    )
}