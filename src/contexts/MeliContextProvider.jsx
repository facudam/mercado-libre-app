import { useState, useReducer } from "react"
import { MeliContext } from "./meliContext"
import { carritoActions } from "../actions/carritoActions"
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

    const [itemForPage, setItemForPage] = useState('MLA612037339')
    const [itemNameForPage, setItemNameForPage] = useState('')

  /* ++++++++++++ UseReducer código +++++++++++ */

    const initialState = []

    const carritoReducer = (carritoState, action) => {
      switch (action.type) {
        case carritoActions.ADD_PRODUCT: {
          const nuevoProducto = action.payload;
          return [...carritoState, nuevoProducto]
        }
        case carritoActions.DELETE_PRODUCT: {
          console.log(action.payload)
        }
        default:
          return carritoState
      }
    }

    const addProductToCart = (producto) => {
      const infoProduct = producto;
      dispatch({
        type: carritoActions.ADD_PRODUCT,
        payload: infoProduct
      })
      
    }

    const deleteProductFromCart = (producto) => {
      dispatch({
        type: carritoActions.DELETE_PRODUCT,
        payload: producto.id
      })
    }

    const [ carritoState, dispatch ] = useReducer(carritoReducer, initialState);

  /* +++++++++++++++++++++++++++++++++++++++++ */

    const getMaxPages = (results) => {
      const MAX_ITEMS = 20;
      const MAX_PAGES = Math.round(results.length / MAX_ITEMS);
      console.log(MAX_PAGES)

      return MAX_PAGES
    }

    const showPaginationButtons = (maxPage) => {
        const anterior = document.querySelector('.anterior'),
          siguiente = document.querySelector('.siguiente');
        if (currentPage === 1) {
          anterior.style.setProperty('display', 'none')
          // siguiente.style.setProperty('display', 'flex')
        } 
        else if (currentPage >= maxPage) {
          // anterior.style.setProperty('display', 'flex')
          siguiente.style.setProperty('display', 'none')
        } 
        else {
          anterior.style.setProperty('display', 'flex')
          siguiente.style.setProperty('display', 'flex')
        }
      }

      const changeItemPageValues = (id, title) => {
        setItemForPage(id)
        let productName = title.replace(/\//g, "");
        setItemNameForPage(productName)
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
            showPaginationButtons,
            itemForPage,
            setItemForPage,
            itemNameForPage, 
            setItemNameForPage,
            changeItemPageValues,
            carritoState,
            addProductToCart,
            getMaxPages
        }}>{ children }</MeliContext.Provider>
    )
}