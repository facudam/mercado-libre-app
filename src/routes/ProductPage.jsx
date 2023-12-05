import { useState, useEffect, useContext } from 'react'
import { MeliContext } from '../contexts/meliContext';
import { useNavigate, useParams } from 'react-router-dom';
import { SellerSlide, ProductAdded, Footer, AgregarUnidades } from '../components';
import { MainCharacteristics, ProductDescriptionSection, SellerReputation, OpcionesDePago, PreguntasYRespuestas } from '../sections';
import { SimpleLoader } from '../loaders/SimpleLoader'
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat';
import { faStar, faStarHalf, faTruckFast, faArrowTurnDown, faChevronDown, faShieldHalved, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heart from '../images/corazon.png'
import '../styles/ProductPage.css'

export const ProductPage = () => {

  const { itemForPage, addProductToCart, lastProductAdded, setLastProductAdded, cantidadItem, setCantidadItem, handleQuantityItems, buyProduct, setShowProductsComparison } = useContext(MeliContext)

  const [item, setItem] = useState([])
  const [ pictureIndex, setPictureIndex] = useState(0)
  const [ loading, setLoading ] = useState(true)
  const navigate = useNavigate()
  const { itemId } = useParams()
  const getItem = async() => {
    
    let url = `https://api.mercadolibre.com/items?ids=${itemId}`;
    const resp = await fetch(url);
    const resultado = await resp.json();
    setItem(resultado[0].body) 
    setLoading(false)
    console.log('itemForPage: ' + itemForPage)
  }

  const activateQuantityItemContainer = () => {
    const icon = document.querySelector('.row-down-icon')
    const quantityItemsContainer = document.querySelector('.quantity-items')
    icon.classList.toggle('rotate')
    quantityItemsContainer.classList.toggle('flexing')
   
  }

  const addQuantityItems = (cant) => {
    setCantidadItem(cant)
    activateQuantityItemContainer()
  }
  
  const addToCartAndToLasProductAdded = () => {
    item.quantity = cantidadItem;
    addProductToCart(item)
    setLastProductAdded([item])
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    // Verificamos si item no es ni null ni undefined, y si no lo es, entonces reemplazamos los "/" por "-"
    if (item && item.id && item.title) {
      const ruta = `/item/${item.id}/${item.title.replace(/\//g, "-")}`;
      navigate(ruta)
    }
  }, [item.id, item.title])

  useEffect(() => {
    setLoading(true)
    setLastProductAdded([])
    setCantidadItem(1)
    getItem()
    // Cada vez que se actualice el item, que se muestre la primera imagen.
    setPictureIndex(0)
  }, [ itemForPage ])

  //Añadimos la cantidad de unidades al producto:
  useEffect(() => {item.quantity = cantidadItem}, [cantidadItem, item])

  useEffect(() => {
    setShowProductsComparison(false)
  }, [])

  if (loading) return (<SimpleLoader />)
  else { return (
   <>
    {
      (lastProductAdded.length > 0) &&
        <ProductAdded img={lastProductAdded[0].thumbnail} title={lastProductAdded[0].title} />
    }
    
    <section className="product-page">
      <div className={`f-direction`}>
        <div className='product-main-info'>
          <div className='small-pictures-container'>
            {
                (!item.pictures) ? <SimpleLoader />
                : item.pictures.slice(0, 8).map((img, index) => (
                    <div
                      onMouseOver={() => setPictureIndex(index)}
                      key={img.id} 
                      className={(index === pictureIndex) ? `small-picture outline-img` : `small-picture`}
                    >
                      <img
                        src={img.secure_url}
                      />
                    </div> 
             ))
             
            }
          </div> 
          <div className='huge-picture-container'>
            {
              (!item.pictures) ? <SimpleLoader />
                : <img src={ item.pictures[pictureIndex].secure_url }/>  
            }
          </div>
          
        </div>
        <SellerSlide id={ item.seller_id } />
        <MainCharacteristics caracteristicas={ item } />
        <ProductDescriptionSection id={item.id} />
        <PreguntasYRespuestas />
      </div>
  
      <div className='buying-ctn'>
        <div className='buying-info'>
          <span>{ (item.condition === 'new') ? 'Nuevo ' : 'Usado ' }
          | 
          {(item.sold_quantity > 100) ? ' +100 vendidos' : ' oferta'}</span>
          <div className='item-title-container'>
            <h1>{ item.title }</h1>
            <img src={ heart } />
          </div>
          {
            (item.sold_quantity > 0) &&
            <div className='stars'>
              <FontAwesomeIcon icon={ faStar } className='star'/>
              <FontAwesomeIcon icon={ faStar } className='star'/>
              <FontAwesomeIcon icon={ faStar } className='star'/>
              <FontAwesomeIcon icon={ faStar } className='star'/>
              <FontAwesomeIcon icon={ faStarHalf } className='star'/>
              <span>({ item.sold_quantity })</span>
            </div>
          }
          
          <div className='pago-container'>
            <span>{ convertToCurrencyFormat(item.price)  }</span>
            <span>en 6x { convertToCurrencyFormat(item.price / 5)  }</span>
            <a>Ver los medios de pago</a>
          </div>
          <div className='mobile-main-picture'>
            {
              (!item.pictures) ? <SimpleLoader />
                : <img src={ item.pictures[0].secure_url }/>  
            }
          </div>
          <div className='entrega-container'>
            <FontAwesomeIcon icon={ faTruckFast } className='entrega-icon'/>
            <div>
              <span>Llega gratis en 48hs</span>
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
              Cantidad:{ (cantidadItem === 1 ) ? ` ${cantidadItem} unidad` : ` ${cantidadItem} unidades` } 
              <FontAwesomeIcon icon={ faChevronDown }   className='row-down-icon'/>
              <span>({ item.available_quantity } { item.available_quantity > 1 ? 'disponibles' : 'disponible'} )</span>
            </button>
            <div className='quantity-items'>
              <AgregarUnidades availableItems={item.available_quantity} addQuantityItems={addQuantityItems}/>
              {
                (item.available_quantity > 6) &&
                <div className='quantity-items__greater'>
                  <span>Cantidad:</span>
                  <div className='quantity-inputs-container'>
                    <input type='number' value={cantidadItem} onChange={handleQuantityItems} />
                    <button
                      onClick={ activateQuantityItemContainer }
                    >Aplicar</button>
                  </div>
                
                </div>
              }
            
            </div>
          </div>
          <div className='buy-btn-container'>
            <button
              onClick={() => buyProduct([item], navigate)}
            >
              Comprar ahora
            </button>
            <button
              onClick={addToCartAndToLasProductAdded}
            >
              Agregar al carrito
            </button>
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
        <OpcionesDePago />
      </div>
    </section>
    <Footer />
   </>
  )
 }
}
