import lupa from '../images/search-outline.svg';
import logo from '../images/mercadolibre.svg'
import '../styles/Nav.css'

export const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav__top'>
            <div>
                <a href='#'><img className='logo' src={ logo } alt='logo de mercado libre' /></a>
                <form>
                    <input type='search' placeholder='Buscar Productos, Marcas y más...'/>
                    <div>
                        <img className='lupa' src={ lupa } alt='lupa-search' />
                    </div>
                </form>
            </div>
            
            <div>
                <a href=''><img src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' alt='promo-disney' /></a>
            </div>
        </div>

        <nav className='nav__main'>

        </nav>
    </div>
  )
}
