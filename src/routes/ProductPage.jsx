import { useState, useEffect } from 'react'
import heart from '../images/corazon.png'
import { faStar, faStarHalf, faTruckFast, faArrowTurnDown, faChevronDown, faShieldHalved, faTrophy } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProductPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SellerSlide } from '../components/SellerSlide';
import { MainCharacteristics } from '../sections/MainCharacteristics';
import { ProductDescriptionSection } from '../sections/ProductDescriptionSection';
import { SellerReputation } from '../sections/SellerReputation';


export const ProductPage = () => {

  const [item, setItem] = useState([])
  const [cantidadItem, setCantidadItem] = useState(1)

  const getItem = async() => {
    let url = 'https://api.mercadolibre.com/items?ids=MLA612037339';
    const resp = await fetch(url);
    const resultado = await resp.json();
    setItem(resultado[0].body) 
  }

  const activateQuantityItemContainer = () => {
    const icon = document.querySelector('.row-down-icon')
    const quantityItemsContainer = document.querySelector('.quantity-items')
    icon.classList.toggle('rotate')
    quantityItemsContainer.classList.toggle('flexing')
    
  }

  useEffect(() => {
    getItem()
  }, [])

  if (!item) return;
  return (
    <section className="product-page">
      <div className={`f-direction`}>
        <div className='product-main-info'>
          <div className='small-pictures-container'>
            {
                (!item.pictures) ? console.log('...cargando')
                : item.pictures.slice(0, 8).map(img => (
                    <div key={img.id} className='small-picture'>
                      <img
                        src={img.secure_url}
                      />
                    </div> 
             ))
             
            }
          </div> 
          <div className='huge-picture-container'>
            {
              (!item.pictures) ? console.log('..cargando')
                : <img src={ item.pictures[0].secure_url }/>  
            }
          </div>
          
        </div>
        <SellerSlide id={ item.seller_id } />
        <MainCharacteristics caracteristicas={ item } />
        <ProductDescriptionSection id={item.id} />
      </div>

  
      <div className='f-direction'>
        <div className='buying-info'>
          <span>{ (item.condition === 'new') ? 'Nuevo ' : 'Usado ' }
          | 
          {(item.sold_quantity > 100) ? ' +100 vendidos' : ' oferta'}</span>
          <div className='item-title-container'>
            <h1>{ item.title }</h1>
            <img src={ heart } />
          </div>
          <div className='stars'>
            <FontAwesomeIcon icon={ faStar } className='star'/>
            <FontAwesomeIcon icon={ faStar } className='star'/>
            <FontAwesomeIcon icon={ faStar } className='star'/>
            <FontAwesomeIcon icon={ faStar } className='star'/>
            <FontAwesomeIcon icon={ faStarHalf } className='star'/>
            <span>({ item.sold_quantity })</span>
          </div>
          <div className='pago-container'>
            <span>$ { item.price }</span>
            <span>en 6x $ { item.price / 5 }</span>
            <a>Ver los medios de pago</a>
          </div>
          <div className='entrega-container'>
            <FontAwesomeIcon icon={ faTruckFast } className='entrega-icon'/>
            <div>
              <span>Llega en 48hs por $ 1.050</span>
              <span>Beneficio mercado puntos</span>
              <a>Ver más formas de entrega</a>
            </div> 
          </div>
          <div className='entrega-container'>
            <FontAwesomeIcon icon={ faArrowTurnDown } className=  {`entrega-icon arrow-turn-down`} />
            <div>
              <span id='devolucion'>Devolución gratis</span>
              <span>Tenés 30 días desde que lo recibís</span>
              <a>Conocer más</a>
            </div>
          </div>
          <p>Stock disponible</p>
          <div className='btn-container'>
            <button 
              onClick={ activateQuantityItemContainer }
              className='btn-cointainer__btn'
            >
              Cantidad:{ cantidadItem } unidad 
              <FontAwesomeIcon icon={ faChevronDown }   className='row-down-icon'/>
              <span>({ item.available_quantity } disponibles)</span>
            </button>
            <div className='quantity-items'>
              <span>1 unidad</span>
              <span>2 unidades</span>
              <span>3 unidades</span>
              <span>4 unidades</span>
              <span>5 unidades</span>
              <span>6 unidades</span>
              {
                (item.available_quantity > 6) &&
                <form className='quantity-items__greater'>
                  <label>Cantidad:</label>
                  <div className='quantity-inputs-container'>
                    <input type='number' value='' />
                    <input type='submit' value='Aplicar'/>
                  </div>
                
                </form>
              }
            
            </div>
          </div>
          <div className='buy-btn-container'>
            <button>Comprar ahora</button>
            <button>Agregar al carrito</button>
          </div>
          <div className='footer-buy-info'>
            <FontAwesomeIcon icon={ faShieldHalved } className='footer-icon' />
            <span><a>Compra protegida</a>, recibí el producto que esperabas  o te devolvemos tu dinero</span>
          </div>
          <div className='footer-buy-info'>
            <FontAwesomeIcon icon={ faTrophy } className='footer-icon' />
            <span><a>Mercado Puntos</a>. Sumás 37 puntos</span>
          </div>
          
        </div>
        <SellerReputation sellerID={item.seller_id} />
      </div>
    </section>
  )
}
