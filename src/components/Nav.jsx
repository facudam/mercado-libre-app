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
import { useContext, useEffect, useState } from 'react';
import { MeliContext } from '../contexts/meliContext';
import { Link, useNavigate } from 'react-router-dom';


export const Nav = () => {

    const { menuActive, setNavIsHover, setProductToBuy, setCurrentPage, showPaginationButtons, setItemSearched, carritoState } = useContext(MeliContext)
    const [itemAbuscar, setItemAbuscar] = useState('')
    const navigate = useNavigate()

    const changeInputValue = (e) => {
        setItemAbuscar(e.target.value)
   }

   const handleSearchInput = (e) => {
        e.preventDefault()
        setItemSearched('')
        setProductToBuy(itemAbuscar)
        navigate(`/search/${itemAbuscar}`)
        setCurrentPage(1)
        showPaginationButtons() 
   }


   useEffect(() => {
    // Establecemos que el form input se encuentre en focus ni bien la aplicación corra.
    document.getElementById('search-products').focus();
   }, [])


  /* Observamos si el display en el menudesplegable se encuentra en 'flex', si es así modificamos el
     estado en navIsHover en true para que aparezca el navHoverModal, caso contrario lo establecemos en false.
  */
    const observarDisplayEnMenu = () => {
        const menuDesplegable = document.querySelector('.menu-desplegable')
        if (getComputedStyle(menuDesplegable).getPropertyValue('display') === 'flex') {
            setNavIsHover(true)
        } else {
            setNavIsHover(false)
        }
    }

   useEffect(() => {
    /* Llamamos a la función observarDisplayEnMenu cada vez que haya un movimiento sobre el documento */
    document.addEventListener('mouseover', e => {
        observarDisplayEnMenu()
    })
    
   }, [])

  return (
    <div className='nav'>
        { /* Desktop Nav */}
        <div className='nav__top'>
            <div className='nav__top-marca'>
                <Link 
                    onClick={() => setItemSearched('')}
                    to="/"
                >
                    <img 
                        className='meli-logo' 
                        src={ logo } 
                        alt='logo de mercado libre' />
                </Link>
                <form
                    onSubmit={ handleSearchInput }
                    className='form' 
                    id='form'
                >
                    <input 
                        id='search-products' 
                        type='search' 
                        placeholder='Buscar productos, marcas y más...'
                        value={ itemAbuscar }
                        onChange={ changeInputValue }
                    />
                    <div
                        onClick={ handleSearchInput }
                        className='form__img-container'
                    >
                        <img className='lupa' src={ lupa } alt='lupa search' />
                    </div>
                </form>
            </div>
            
            <div className='propaganda'>
                <a><img src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' alt='promo-disney' /></a>
            </div>
        </div>

        <nav className='nav__top nav__main'>
            <div className='nav__top-first'>
                <button className='btn-location'>
                    <img src={ location_img } alt='location image'/>
                    <div className='btn-location__sending-to'>
                        <p>Enviar a</p>
                        <p>Capital Federal</p>
                    </div>
                </button>
                <div>
                    <nav className='nav-item-container'>
                        <ul>
                            <li className='li-img' id='li-img'><span>Categorías</span><img src={ row_down } alt='row down' />
                                <ul className='menu-desplegable'>
                                    <li><a className='h-ref' >Vehiculos</a></li>
                                    <li><a className='h-ref' >Inmuebles</a></li>
                                    <li><a className='h-ref' >Supermercado</a></li>
                                    <li><a className='h-ref' >Tecnología</a></li>
                                    <li><a className='h-ref' >Hogar y Muebles</a></li>
                                    <li><a className='h-ref' >Electrodomésticos</a></li>
                                    <li><a className='h-ref' >Herramientas</a></li>
                                    <li><a className='h-ref' >Construcción</a></li>
                                    <li><a className='h-ref' >Deportes y Fitness</a></li>
                                    <li><a className='h-ref' >Accesorios para Vehículos</a></li>
                                    <li><a className='h-ref' >Moda</a></li>
                                    <li><a className='h-ref' >Juegos y Juguetes</a></li>
                                    <li><a className='h-ref' >Bebés</a></li>
                                    <li><a className='h-ref' >Belleza y Cuidado Personal</a></li>
                                    <li><a className='h-ref' >Salud y Equipamiento Médico</a></li>
                                    <li><a className='h-ref' >Industrias y Oficinas</a></li>
                                    <li><a className='h-ref' >Agro</a></li>
                                    <li><a className='h-ref' >Productos sustentables</a></li>
                                    <li><a className='h-ref' >Servicios</a></li>
                                    <li><a className='h-ref' >Más vendidos</a></li>
                                    <li><a className='h-ref' >Tiendas oficiales</a></li>
                                    <li><a className='h-ref' >Ver más categorías</a></li>
                                </ul>   
                            </li>
                            <li><a >Ofertas</a></li>
                            <li><a >Historial</a></li>
                            <li><a >Supermercado</a></li>
                            <li><a >Moda</a></li>
                            <li><a >Vender</a></li>
                            <li><a >Ayuda</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            <div className='nav__top-second'>
                <nav className='nav-item-container'>
                    <ul id='login-nav'>
                        <li><a>Creá tu cuenta</a></li>
                        <li><a>Ingresá</a></li>
                        <li><a>Mis compras</a></li>
                        <li className='relative-position'>
                            <Link to="/gz/cart/v2">
                                <img className='carrito-img' src={ carrito } alt='carrito de compras'/>
                            </Link>
                            {
                                (carritoState.length > 0 ) && <div className='cant-products-cart'>{ carritoState.length }</div>
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        
        </nav>
           

        {/* mobile nav */}

        <div className='nav__top nav-mobile-superior'>
            <img className='mobile-logo' src={ mobileLogo } />
            <form
                onSubmit={ handleSearchInput } 
                className='nav-mobile-superior__input'
            >
                <div
                    onClick={ handleSearchInput }
                    className='lupa-container'
                >
                    <img src={ lupa } alt='lupa' />
                </div>
                <input 
                    value={ itemAbuscar }
                    onChange={ changeInputValue }
                    type='search' 
                    placeholder='Buscar productos, marcas y más...'/>
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
