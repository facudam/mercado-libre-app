import userImg from '../images/user-profile.png'
import inicio from '../images/inicio.png'
import notificaciones from '../images/notificaciones.png'
import mis_compras from '../images/miscompras.png'
import favoritos from '../images/favoritos.png'
import ofertas from '../images/ofertas.png'
import prestamos from '../images/prestamos.png'
import peliculas from '../images/peliculas.png'
import historial from '../images/historial.png'
import cuenta from '../images/micuenta.png'
import ayuda from '../images/ayuda.png'
import mercado from '../images/mercado.png'
import supermercado from '../images/supermercado.png'
import moda from '../images/moda.png'
import mas_vendidos from '../images/masvendidos.png'
import tiendas from '../images/tiendas.png'
import categorias from '../images/categorias.png'
import resumen from '../images/resumen.png'
import vender from '../images/vender.png'
import compra_vende from '../images/comprayvende.png'
import { EnlaceMenu } from './EnlaceMenu'


export const DropdownMobileMenu = () => {
  return (
    <div className='desplegable-mobile-menu'>
        <div className='desplegable-mobile-menu__header'>
            <div className='img-user'>
                <img src={ userImg } alt='user profile image' />
            </div>
            <div className='ingreso-cuenta'>
                <p>Bienvenido</p>
                <p>Ingresa a tu cuenta para ver tus compras, favoritos, etc</p>
                <div className='btn-count-container'>
                    <button>Ingresá</button>
                    <button>Creá tu cuenta</button>
                </div>
            </div>
        </div>
        <div className='desplegable-mobile-menu__anchors'>
            <EnlaceMenu imagen={ inicio } titulo='Inicio'/>
            <EnlaceMenu imagen={ notificaciones } titulo='Notificaciones' />
            <EnlaceMenu imagen={ mis_compras } titulo='Mis compras' />
            <EnlaceMenu imagen={ favoritos } titulo='Favoritos' />
            <EnlaceMenu imagen={ ofertas } titulo='Ofertas' />
            <EnlaceMenu imagen={ prestamos } titulo='Préstamos' />
            <EnlaceMenu imagen={ peliculas } titulo='Películas y series' />
            <EnlaceMenu imagen={ historial } titulo='Historial' />
            <EnlaceMenu imagen={ cuenta } titulo='Mi cuenta' />
            <EnlaceMenu imagen={ ayuda } titulo='Ayuda' />
            <EnlaceMenu imagen={ mercado } titulo='Mercado Shops' />
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
