import { useEffect, useState, useContext } from 'react'
import '../styles/SearchProductContainer.css'
import { getProductImages } from '../helpers/getProductImages'
import { Link } from "react-router-dom";
import { MeliContext } from '../contexts/meliContext';
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat';


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
    <div className="search-product-container" >
        <Link 
            onMouseOver={() => changeItemPageValues(identifier, name)}
            to={`/item/${identifier}/${itemNameForPage}`}
            className="product-img-container"
        >
            <img src={ productUrlImage } alt={ name } />
        </Link>
        <div className="product-information">
            <Link
                onMouseOver={() => changeItemPageValues(identifier, name)}
                to={`/item/${identifier}/${itemNameForPage}`}
            >
                <h2>{ name }</h2>
            </Link>
            <span> { convertToCurrencyFormat(price) }</span>
            <span>Envío gratis</span>
        </div>
        <div className='seleccionar-producto'>
            <input type='checkbox' id={ identifier} />
            <label htmlFor={ identifier }>Seleccionar</label>
        </div> 
    </div>
  )
}
