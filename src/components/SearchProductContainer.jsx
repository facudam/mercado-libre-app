import { useEffect, useState, useContext } from 'react'
import '../styles/SearchProductContainer.css'
import { getProductImages } from '../helpers/getProductImages'
import { Link, Navigate } from "react-router-dom";
import { MeliContext } from '../contexts/meliContext';
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat';


export const SearchProductContainer = ({ identifier, img, name, price, item }) => {

    const { itemNameForPage, changeItemPageValues, productsToCompare, setProductsToCompare } = useContext(MeliContext)

    const [ productUrlImage, setProductUrlImage ] = useState('')

    const getProductUrlImage = async() => {
        const imagen = await getProductImages(img)
        setProductUrlImage(imagen[0].body.pictures[0].url)
    }
    
    const addOrDeleteToProductsToCompare = (id, item) => {
        const productAllreadyAdded = productsToCompare.find(item => item.id === id)
        productAllreadyAdded 
            ? setProductsToCompare(productsToCompare.filter(item => item.id !== id)) 
            : setProductsToCompare([...productsToCompare, item])
    }

    // useEffect(() => {
    //     Navigate(`/item/${identifier}/${name}`)
    // }, [identifier, name])
   
    useEffect(() => {
        getProductUrlImage()
    }, [])

  return (
    <div className="search-product-container" >
        <Link 
            onMouseOver={() => changeItemPageValues(identifier, name)}
            onClick={() => changeItemPageValues(identifier, name)}
            to={`/item/${identifier}/${itemNameForPage}`}
            className="product-img-container"
        >
            <img src={ productUrlImage } alt={ name } />
        </Link>
        <div className="product-information">
            <Link
                onMouseOver={() => changeItemPageValues(identifier, name)}
                onClick={() => changeItemPageValues(identifier, name)}
                to={`/item/${identifier}/${itemNameForPage}`}
            >
                <h2>{ name }</h2>
            </Link>
            <span> { convertToCurrencyFormat(price) }</span>
            <span>Envío gratis</span>
        </div>
        <div className='seleccionar-producto'>
            <input 
                onClick={() => addOrDeleteToProductsToCompare(identifier, item)}
                type='checkbox' id={ identifier} 
            />
            <label htmlFor={ identifier }>Comparar</label>
        </div> 
    </div>
  )
}
