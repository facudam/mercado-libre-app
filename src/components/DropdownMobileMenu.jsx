import userImg from '../images/user-profile.png'

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
            
        </div>
    </div>
  )
}
