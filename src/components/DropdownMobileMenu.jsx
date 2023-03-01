import userImg from '../images/user-profile.png'
import inicio from '../images/inicio.png'
import ofertas from '../images/ofertas.png'
import historial from '../images/historial.png'
import ayuda from '../images/ayuda.png'
import supermercado from '../images/supermercado.png'
import moda from '../images/moda.png'
import mas_vendidos from '../images/masvendidos.png'
import tiendas from '../images/tiendas.png'
import categorias from '../images/categorias.png'
import resumen from '../images/resumen.png'
import vender from '../images/vender.png'
import compra_vende from '../images/comprayvende.png'
import { EnlaceMenu } from './EnlaceMenu'
import '../styles/DropdownMobileMenu.css'


export const DropdownMobileMenu = () => {
  return (
    <div className='desplegable-mobile-menu'>
        <div className='desplegable-mobile-menu__header'>
            <div className='user-bienvenida'>
                <img src={ userImg } alt='user profile image' />
                <div className='bienvenida'>
                    <p>Bienvenido</p>
                    <p>Ingresa a tu cuenta para ver tus compras, favoritos, etc</p>
                </div>
                
            </div>
            <div className='ingreso-cuenta'>
                <button>Ingresá</button>
                <button>Creá tu cuenta</button> 
            </div>
        </div>
        <div className='desplegable-mobile-menu__anchors'>
            <EnlaceMenu imagen={ inicio } titulo='Inicio'/>
            <EnlaceMenu imagen={ ofertas } titulo='Ofertas' />
            <EnlaceMenu imagen={ historial } titulo='Historial' />
            <EnlaceMenu imagen={ ayuda } titulo='Ayuda' />
            <EnlaceMenu imagen={ supermercado } titulo='Supermercado' />
            <EnlaceMenu imagen={ moda } titulo='Moda' />
            <EnlaceMenu imagen={ mas_vendidos } titulo='Más vendidos' />
            <EnlaceMenu imagen={ tiendas } titulo='Tiendas oficiales' />
            <EnlaceMenu imagen={ categorias } titulo='Categorías' />
            <EnlaceMenu imagen={ resumen } titulo='Resumen' />
            <EnlaceMenu imagen={ vender } titulo='Vender' />
            <EnlaceMenu imagen={ compra_vende } titulo='¡Comprá y vendé con la app!' />
        </div>
    </div>
  )
}
