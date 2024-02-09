import { useContext, useEffect } from 'react'
import { MeliContext } from '../contexts/MeliContext'
import { FiltrosSearch, SearchProductsSection } from '../sections'
import { SimpleLoader } from '../loaders/SimpleLoader'
import { getProducts } from '../helpers/getProducts'
import '../styles/SearchResultsPage.css'


export const SearchResultsPage = () => {

  const { itemSearched, setItemSearched, productToBuy, setLastProductAdded, setCantidadItem } = useContext(MeliContext)

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = "rgb(237, 237, 237)"
    setCantidadItem(1)
  }, [])

  const getItemSearched = async() => {
    const busqueda = await getProducts(productToBuy);
    setItemSearched(busqueda)
  }
  
  useEffect(() => {
    getItemSearched()
    setLastProductAdded([])
  }, [ productToBuy ])

  const { query, paging, available_filters, results } = itemSearched

  
  return (
    <div>
      {
        (!itemSearched) 
          ? <SimpleLoader />
          : <div className='search-results-page'>
              <FiltrosSearch 
                busqueda={ query } 
                cantResultados={ paging.total } 
                availableFilters={ available_filters } 
              />
              <SearchProductsSection results={ results } />
            </div>
      }
    </div>
  )
}
