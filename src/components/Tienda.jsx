import '../styles/Tienda.css'

export const Tienda = ({ fondo, logo, marca, img1, img2, img3 }) => {
  return (
    <div className='tienda'>
        <img className='tienda-fondo' src={ fondo }/>
        <img className='logo' src={ logo } />
        <div className='tienda__data'>
            <h3>{ marca }</h3>
            <div className='tienda__data-imgs'>
                <img src={ img1 } />
                <img src={ img2 } />
                <img src={ img3 } />
            </div>
            <a href=''>Ver tienda</a>
        </div>
    </div>
  )
}
