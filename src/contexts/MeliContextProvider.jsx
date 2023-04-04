import { useState } from "react"
import { MeliContext } from "./meliContext"
export const ContextProvider = ({children}) => {

    const [ menuActive, setMenuActive ] = useState(false)
    
    // Modal Medios de pago.
    const [ mediosDePagoIsActive, setMediosDePagoIsActive ] = useState(false)

    // Para obtener la lista de productos en oferta
    const [ productosEnOferta, setProductosEnOferta ] = useState([])
    const [ urlProductImage, setUrlProductImage ] = useState('')

    const [ categories, setCategories ] = useState([])

    const [ navIsHover, setNavIsHover ] = useState(false)

    const [ itemSearched, setItemSearched ] = useState('')

    const [ productToBuy, setProductToBuy ] = useState('')

    const [ currentPage, setCurrentPage ] = useState(1)

    const showPaginationButtons = () => {
        const anterior = document.querySelector('.anterior'),
          siguiente = document.querySelector('.siguiente');
        if (currentPage === 1) {
          anterior.style.setProperty('display', 'none')
          siguiente.style.setProperty('display', 'flex')
        } 
        else if (currentPage === 3) {
          anterior.style.setProperty('display', 'flex')
          siguiente.style.setProperty('display', 'none')
        } 
        else {
          anterior.style.setProperty('display', 'flex')
          siguiente.style.setProperty('display', 'flex')
        }
      }

    return(
        <MeliContext.Provider value={{
            menuActive,
            setMenuActive,
            mediosDePagoIsActive,
            setMediosDePagoIsActive,
            productosEnOferta,
            setProductosEnOferta,
            urlProductImage,
            setUrlProductImage, 
            categories,
            setCategories,
            navIsHover,
            setNavIsHover,
            itemSearched,
            setItemSearched,
            productToBuy,
            setProductToBuy, 
            currentPage,
            setCurrentPage,
            showPaginationButtons
        }}>{ children }</MeliContext.Provider>
    )
}