import { useState, useEffect } from 'react'
import heart from '../images/corazon.png'
import '../styles/ProductPage.css'


export const ProductPage = () => {

  const [item, setItem] = useState([])

  const getItem = async() => {
    let url = 'https://api.mercadolibre.com/items?ids=MLA801075098';
    const resp = await fetch(url);
    const resultado = await resp.json();
    setItem(resultado[0].body)

    
  }

  useEffect(() => {
    getItem()
  }, [])

console.log(item)
  return (
    <section className="product-page">
      <div className='product-main-info'>
        <div className='small-pictures-container'>
          {
              (!item.pictures) ? console.log('error')
              : item.pictures.map(img => (
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
            (!item.pictures) ? console.log('otro error')
              : <img src={ item.pictures[0].secure_url }/>  
          }
        </div>
      </div>
      <div className='buying-info'>
        <span>{ (item.condition === 'new') ? 'Nuevo' : 'Usado' } | +100 vendidos</span>
        <div className='item-title-container'>
          <h1>{ item.title }</h1>
          <img src={ heart } />
        </div>
      </div>
    </section>
  )
}
