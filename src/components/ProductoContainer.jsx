import { useContext, useEffect, useState } from "react"
import { getProductImages } from "../helpers/getProductImages";
import corazon from '../images/corazon.png'
import '../styles/ProductoContainer.css'
import { useNavigate } from "react-router-dom";
import { MeliContext } from "../contexts/meliContext";

export const ProductoContainer = ({ id, img, title, price, descuento, cuotas, envio, precioCuota }) => {

  const {setItemForPage, setItemNameForPage, itemNameForPage} = useContext(MeliContext)
  const [ urlImage, setUrlImage ] = useState('')

  const navigate = useNavigate()

    const goToItemPage = (id, title) => {
      setItemForPage(id)
      setItemNameForPage(title)
      navigate(`/item/${itemNameForPage}`)
    }

  const getUrlImage = async() => {
    const main_img = await getProductImages(img);
    setUrlImage(main_img[0].body.pictures[0].url)
  }
  useEffect(() => {
    getUrlImage()
  }, [])

  return (
    <div className="main-container" onClick={() => goToItemPage(id, title)}>
        <div className="img-container">
          <div className="img-container__heart"><img src={ corazon } alt='corazon svg' width='20' /></div>
  
          <img className="product-image" src={ urlImage } alt={`imagen del producto ${ title }`}  />
        </div>
        <div className="separator-line"></div>
        <div className="info-container">
            <div className="full-price">
                <span>$ { price }</span>
                <span>{ descuento }</span>
            </div>
            <span>{ `En ${cuotas} cuotas de $${precioCuota}`  }</span>
            <span>{ envio }</span>
            <span>{ title }</span>
        </div>
    </div>
  )
}
