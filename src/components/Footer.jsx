import '../styles/Footer.css'
import footer1 from '../images/footer1.svg'
import footer2 from '../images/footer2.svg'
import footer3 from '../images/footer3.svg'

export const Footer = () => {
  return (
    <footer>
        <div className='footer-second-container'>
            
            <div className='footer-info'>
                <img src={ footer1 } />
                <div>
                    <p>Elegí cómo pagar</p>
                    <p>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
                    <a href=''>Cómo pagar tus compras</a>
                </div>
            </div>
            <div className='footer-info'>
                <img src={ footer2 } />
                <div>
                    <p>Envío gratis desde $ 8.000</p>
                    <p>Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</p>
                    <a href=''>Conocé más sobre este beneficio</a>
                </div>
            </div>
            <div className='footer-info'>
                <img src={ footer3 } />
                <div>
                    <p>Seguridad, de principio a fin</p>
                    <p>¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
                    <a href=''>Cómo te protegemos</a>
                </div>
            </div>
        </div>
        <span>Developed by Facundo Cáceres</span>
    </footer>
  )
}
