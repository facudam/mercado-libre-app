import { useContext, useEffect } from 'react'
import { SearchBanner } from '../components/SearchBanner'
import { MeliContext } from '../contexts/meliContext'
import { getProducts } from '../helpers/getProducts'
import { FiltrosSearch } from '../sections/FiltrosSearch'
import '../styles/SearchResultsPage.css'
import { SearchProductsSection } from '../sections/SearchProductsSection'
import { SimpleLoader } from '../loaders/SimpleLoader'

export const SearchResultsPage = () => {

  const { itemSearched, setItemSearched, productToBuy, setLastProductAdded } = useContext(MeliContext)

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = "rgb(237, 237, 237)"
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
      <SearchBanner />
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
