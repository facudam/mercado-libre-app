import { useEffect, useState, useContext } from 'react'
import '../styles/SearchProductContainer.css'
import { getProductImages } from '../helpers/getProductImages'
import { Link } from "react-router-dom";
import { MeliContext } from '../contexts/meliContext';


export const SearchProductContainer = ({ identifier, img, name, price }) => {

    const { itemNameForPage, changeItemPageValues } = useContext(MeliContext)

    const [ productUrlImage, setProductUrlImage ] = useState('')

    const getProductUrlImage = async() => {
        const imagen = await getProductImages(img)
        setProductUrlImage(imagen[0].body.pictures[0].url)
    }

    useEffect(() => {
        getProductUrlImage()
    }, [])

  return (
    <Link
        className="search-product-container" 
        onMouseOver={() => changeItemPageValues(identifier, name)}
        to={`/item/${identifier}/${itemNameForPage}`}
    >
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
        
    </Link>
  )
}
