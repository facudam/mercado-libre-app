import { useContext, useEffect, useState } from "react"
import { getProductImages } from "../helpers/getProductImages";
import corazon from '../images/corazon.png'
import '../styles/ProductoContainer.css'
import { Link } from "react-router-dom";
import { MeliContext } from "../contexts/MeliContext";
import { convertToCurrencyFormat } from "../helpers/convertToCurrencyFormat";

export const ProductoContainer = ({ id, img, title, price, descuento, cuotas, envio, precioCuota }) => {

  const { itemNameForPage, changeItemPageValues } = useContext(MeliContext)
  const [ urlImage, setUrlImage ] = useState('')


  const getUrlImage = async() => {
    try {
      const main_img = await getProductImages(id);
      console.log(main_img)
      setUrlImage(main_img[0].body.pictures[0].url)
    } catch (error) {
      console.log(error)
    }
    
  }
  useEffect(() => {
    getUrlImage()
  }, [])

  return (
    <Link 
      className="main-container" 
      to={`/item/${id}/${itemNameForPage}`} 
      onMouseOver={() => changeItemPageValues(id, title)}
      onClick={() => changeItemPageValues(id, title)}
      >
        <div id="img-container">
          <div className="img-container__heart"><img id="img-container__heart-img" src={ corazon } alt='corazon svg'/></div>
          <img id="product-image" src={ urlImage } alt={`imagen del producto ${ title }`}  />
        </div>
        <div className="separator-line"></div>
        <div className="info-container">
            <div className="full-price">
                <span>{ convertToCurrencyFormat(price) }</span>
                <span>{ descuento }</span>
            </div>
            <span>{ `En ${cuotas} cuotas de ${precioCuota}`  }</span>
            <span>{ envio }</span>
            <span>{ title }</span>
        </div>
    </Link>
  )
}
