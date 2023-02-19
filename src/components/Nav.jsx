import lupa from '../images/search-outline.svg';
import logo from '../images/mercadolibre.svg'
import '../styles/Nav.css'

export const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav__top'>
            <div className='nav__top-marca'>
                <a href='#'><img className='logo' src={ logo } alt='logo de mercado libre' /></a>
                <form className='form'>
                    <input type='search' placeholder='Buscar productos, marcas y más...'/>
                    <div className='form__img-container'>
                        <img className='lupa' src={ lupa } alt='lupa-search' />
                    </div>
                </form>
            </div>
            
            <div className='propaganda'>
                <a href=''><img src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' alt='promo-disney' /></a>
            </div>
        </div>

        <nav className='nav__main'>

        </nav>
    </div>
  )
}
