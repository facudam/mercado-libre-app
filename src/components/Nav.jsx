import lupa from '../images/search-outline.svg';
import logo from '../images/mercadolibre.svg';
import location_img from '../images/location-outline.svg';
import row_down from '../images/row-down.svg';
import row_right from '../images/row-right.svg'
import carrito from '../images/cart.svg'
import mobileLogo from '../images/meli-mobile-logo.png'
import '../styles/Nav.css'
import { MenuHamburguesa } from './MenuHamburguesa';
import { DropdownMobileMenu } from './DropdownMobileMenu';
import { useContext, useState } from 'react';
import { MeliContext } from '../contexts/meliContext';


export const Nav = () => {

   const { menuActive } = useContext(MeliContext)

  return (
    <div className='nav'>
        { /* Desktop Nav */}
        <div className='nav__top'>
            <div className='nav__top-marca'>
                <a href='#'><img className='logo' src={ logo } alt='logo de mercado libre' /></a>
                <form className='form'>
                    <input type='search' placeholder='Buscar productos, marcas y más...'/>
                    <div className='form__img-container'>
                        <img className='lupa' src={ lupa } alt='lupa search' />
                    </div>
                </form>
            </div>
            
            <div className='propaganda'>
                <a href=''><img src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' alt='promo-disney' /></a>
            </div>
        </div>

        <nav className='nav__top nav__main'>
            <div className='nav__top-first'>
                <button className='btn-location'>
                    <img src={ location_img } alt='location image'/>
                    <div className='btn-location__sending-to'>
                        <p>Enviar a</p>
                        <p>Buenos Aires 1888</p>
                    </div>
                </button>
                <div>
                    <nav className='nav-item-container'>
                        <ul>
                            <li className='li-img'><span>Categorías</span><img src={ row_down } alt='row down' />
                                <ul className='menu-desplegable'>
                                    <li><a className='h-ref' href=''>Vehiculos</a></li>
                                    <li><a className='h-ref' href=''>Inmuebles</a></li>
                                    <li><a className='h-ref' href=''>Supermercado</a></li>
                                    <li><a className='h-ref' href=''>Tecnología</a></li>
                                    <li><a className='h-ref' href=''>Hogar y Muebles</a></li>
                                    <li><a className='h-ref' href=''>Electrodomésticos</a></li>
                                    <li><a className='h-ref' href=''>Herramientas</a></li>
                                    <li><a className='h-ref' href=''>Construcción</a></li>
                                    <li><a className='h-ref' href=''>Deportes y Fitness</a></li>
                                    <li><a className='h-ref' href=''>Accesorios para Vehículos</a></li>
                                    <li><a className='h-ref' href=''>Moda</a></li>
                                    <li><a className='h-ref' href=''>Juegos y Juguetes</a></li>
                                    <li><a className='h-ref' href=''>Bebés</a></li>
                                    <li><a className='h-ref' href=''>Belleza y Cuidado Personal</a></li>
                                    <li><a className='h-ref' href=''>Salud y Equipamiento Médico</a></li>
                                    <li><a className='h-ref' href=''>Industrias y Oficinas</a></li>
                                    <li><a className='h-ref' href=''>Agro</a></li>
                                    <li><a className='h-ref' href=''>Productos sustentables</a></li>
                                    <li><a className='h-ref' href=''>Servicios</a></li>
                                    <li><a className='h-ref' href=''>Más vendidos</a></li>
                                    <li><a className='h-ref' href=''>Tiendas oficiales</a></li>
                                    <li><a className='h-ref' href=''>Ver más categorías</a></li>
                                </ul>   
                            </li>
                            <li><a href=''>Ofertas</a></li>
                            <li><a href=''>Historial</a></li>
                            <li><a href=''>Supermercado</a></li>
                            <li><a href=''>Moda</a></li>
                            <li><a href=''>Vender</a></li>
                            <li><a href=''>Ayuda</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            <div className='nav__top-second'>
                <nav className='nav-item-container'>
                    <ul>
                        <li><a href=''>Creá tu cuenta</a></li>
                        <li><a href=''>Ingresá</a></li>
                        <li><a href=''>Mis compras</a></li>
                        <li><img className='carrito-img' src={ carrito } alt='carrito de compras'/></li>
                    </ul>
                </nav>
            </div>
        
        </nav>
           

        {/* mobile nav */}

        <div className='nav__top nav-mobile-superior'>
            <img className='mobile-logo' src={ mobileLogo } />
            <form className='nav-mobile-superior__input'>
                <div className='lupa-container'>
                    <img src={ lupa } alt='lupa' />
                </div>
                <input type='search' placeholder='Buscar productos, marcas y más...'/>
            </form>
            
            <MenuHamburguesa />
            <img className='carrito-img' src={ carrito } alt='carrito de compras' />
        </div>
        {
            !menuActive && 
            <button className='nav__top btn-mobile'>
                <div className='btn-mobile__location'>
                    <img src={ location_img } alt='location image'/>
                    <span>Enviar a Buenos Aires</span>
                </div>
            
                <img src={ row_right } alt='flecha mirando a la derecha' />
            </button>
        }
        
        <div className='dropdown-mobile'>
            {
                menuActive && <DropdownMobileMenu />
            }
            
        </div>
        
    </div>
  )
}
