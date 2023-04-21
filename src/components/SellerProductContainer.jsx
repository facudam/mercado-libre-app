import { useContext, useEffect, useState } from 'react'
import { getProductImages } from '../helpers/getProductImages';
import { Link } from "react-router-dom";
import '../styles/SellerSlide.css'
import { MeliContext } from '../contexts/meliContext';
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat';

export const SellerProductContainer = ({ id, title, price }) => {

    const { itemNameForPage, changeItemPageValues } = useContext(MeliContext)

    const [ srcImage, setSrcImage ] = useState('')

    const getSellerProductImage = async() => {
        const image = await getProductImages(id);
        setSrcImage(image[0].body.pictures[0].url)
    }

    useEffect(() => {
        getSellerProductImage()
    }, [])

  return (
    <Link 
        key={ id } 
        className='item-box'
        to={`/item/${id}/${itemNameForPage}`}
        onClick={() => changeItemPageValues(id, title)}
    >
        <div className='item-box__img-container'>
            <img id='item-box-img' src={ srcImage } alt={ title } />
        </div>
        <div className='item-box__info'>
            <span>{ convertToCurrencyFormat(price) }</span>
            <span>{ title }</span>
        </div>
                        
    </Link>
  )
}
