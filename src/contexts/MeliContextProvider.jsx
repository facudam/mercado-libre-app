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

    const [ itemForPage, setItemForPage ] = useState('MLA612037339')
    const [ itemNameForPage, setItemNameForPage ] = useState('')

    const [ lastProductAdded, setLastProductAdded ] = useState([])

    const [cantidadItem, setCantidadItem] = useState(1)


  /* ++++++++++++ UseReducer código +++++++++++ */

    const initialState = []

    const carritoReducer = (carritoState, action) => {
      switch (action.type) {
        case carritoActions.ADD_PRODUCT: {
          const nuevoProducto = action.payload;

          // Si el producto ya se encuentra en el carritoState, entonces productAllreadyAdded será un objeto.
          const productAllreadyAdded = carritoState.find(producto => producto.id === nuevoProducto.id)

          if(productAllreadyAdded) {
            return carritoState.map(item => item.id === nuevoProducto.id ? {...item, quantity : item.quantity + nuevoProducto.quantity} : item)
          } else {
            return [...carritoState, nuevoProducto]
          }

          
        }
        case carritoActions.DELETE_PRODUCT: {
          return carritoState.filter(item => item.id !== action.payload.id)
        }
        case carritoActions.INCREMENT_QUANTITY: {
          const itemId = action.payload;
          return carritoState.map((item) => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)
        }
        case carritoActions.DECREMENT_QUANTITY: {
          const itemId = action.payload
          return carritoState.map((item) => (item.id === itemId && item.quantity > 1 ) ? {...item, quantity: item.quantity - 1} : item)
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
        payload: producto
      })
    }

    const IncrementQuantityProduct = (producto) => {
      dispatch({
        type: carritoActions.INCREMENT_QUANTITY,
        payload: producto.id
      })
    }

    const DecrementQuantityProduct = (producto) => {
      dispatch({
        type: carritoActions.DECREMENT_QUANTITY,
        payload: producto.id
      })
    }

    const [ carritoState, dispatch ] = useReducer(carritoReducer, initialState);

  /* +++++++++++++++++++++++++++++++++++++++++ */

    let totalPrice = 0;
    const getTotalPriceFromCart = () => {
      const totalPrice = carritoState.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
      }, 0);
      return totalPrice
    }

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
        } 
        else if (currentPage >= maxPage) {
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

    const handleQuantityItems = (e) => {
        setCantidadItem(e.target.value)
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
            deleteProductFromCart,
            IncrementQuantityProduct,
            DecrementQuantityProduct,
            getMaxPages,
            lastProductAdded, 
            setLastProductAdded,
            getTotalPriceFromCart,
            cantidadItem, 
            setCantidadItem,
            handleQuantityItems
        }}>{ children }</MeliContext.Provider>
    )
}