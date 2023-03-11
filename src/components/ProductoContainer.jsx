import { useEffect, useState } from "react"
import { getProductImages } from "../helpers/getProductImages"

export const ProductoContainer = ({ img, title, price, descuento, cuotas, envio }) => {

  const [ urlImage, setUrlImage ] = useState('')

  const getUrlImage = async() => {
    const main_img = await getProductImages(img);
    setUrlImage(main_img[0].body.pictures[0].url)
  }
  useEffect(() => {
    getUrlImage()
  }, [])

  return (
    <div className="main-container">
        <div>
          <img src={ urlImage } alt={`imagen del producto ${ title }`} width='224' />
        </div>
        <div>
            <div>
                <span>$ { price }</span>
                <span>{ descuento }</span>
            </div>
            <span>{ cuotas }</span>
            <span>{ envio }</span>
            <span>{ title }</span>
        </div>
    </div>
  )
}
