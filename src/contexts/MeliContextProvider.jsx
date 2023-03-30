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
            setItemSearched
        }}>{ children }</MeliContext.Provider>
    )
}