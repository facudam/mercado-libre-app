import { useEffect, useState } from 'react'
import { getProductImages } from '../helpers/getProductImages';
import '../styles/SellerSlide.css'

export const SellerProductContainer = ({ id, title, price }) => {

    const [ srcImage, setSrcImage ] = useState('')

    const getSellerProductImage = async() => {
        const image = await getProductImages(id);
        setSrcImage(image[0].body.pictures[0].url)
    }

    useEffect(() => {
        getSellerProductImage()
    }, [])

  return (
    <div key={ id } className='item-box'>
        <div className='item-box__img-container'>
            <img src={ srcImage } alt={ title } />
        </div>
        <div className='item-box__info'>
            <span>$ { price }</span>
            <span>{ title }</span>
        </div>
                        
    </div>
  )
}
