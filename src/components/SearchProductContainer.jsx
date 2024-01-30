import { useEffect, useState, useContext } from 'react'
import '../styles/SearchProductContainer.css'
import { getProductImages } from '../helpers/getProductImages'
import { Link } from "react-router-dom";
import { MeliContext } from '../contexts/MeliContext';
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat';


export const SearchProductContainer = ({ identifier, img, name, price, item }) => {

    const { itemNameForPage, changeItemPageValues, productsToCompare, setProductsToCompare } = useContext(MeliContext)

    const [ productUrlImage, setProductUrlImage ] = useState('')

    const getProductUrlImage = async() => {
        const imagen = await getProductImages(img)
        setProductUrlImage(imagen[0].body.pictures[0].url)
    }
    
    const AddProductIfApplicable = () => {
        const itemAlreadyAdded = productsToCompare.find(producto => producto.id === item.id)
        if(!itemAlreadyAdded) {
            setProductsToCompare([...productsToCompare, item])
        } else {
            alert('El producto ya está añadido en la tabla comparativa')
        }
    }

    const handleProductsToCompare = (e) => {
        const { checked } = e.target;
        if (checked) {
            AddProductIfApplicable()
        } else {
            setProductsToCompare(productsToCompare.filter(product => product.id !== identifier));
        }
    }
   
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
                onChange={ handleProductsToCompare }
                type='checkbox' id={ identifier} 
            />
            <label htmlFor={ identifier }>Comparar</label>
        </div> 
    </div>
  )
}
