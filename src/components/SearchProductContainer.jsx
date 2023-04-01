import { useEffect, useState } from 'react'
import '../styles/SearchProductContainer.css'
import { getProductImages } from '../helpers/getProductImages'

export const SearchProductContainer = ({ identifier, img, name, price }) => {

    const [ productUrlImage, setProductUrlImage ] = useState('')

    const getProductUrlImage = async() => {
        const imagen = await getProductImages(img)
        setProductUrlImage(imagen[0].body.pictures[0].url)
    }

    useEffect(() => {
        getProductUrlImage()
    }, [])

  return (
    <div className="search-product-container">
        <div className="product-img-container">
            <img src={ productUrlImage } alt={ name } />
        </div>
        <div className="product-information">
            <h2>{ name }</h2>
            <span>$ { price }</span>
            <span>Envío gratis</span>
        </div>
        <div className='seleccionar-producto'>
            <input type='checkbox' id={ identifier} />
            <label htmlFor={ identifier }>Seleccionar</label>
        </div>
        
    </div>
  )
}
