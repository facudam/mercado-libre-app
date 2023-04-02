import React, { useContext, useEffect } from 'react'
import { SearchBanner } from '../components/SearchBanner'
import { MeliContext } from '../contexts/meliContext'
import { getProducts } from '../helpers/getProducts'
import { FiltrosSearch } from '../sections/FiltrosSearch'
import '../styles/SearchResultsPage.css'
import { SearchProductsSection } from '../sections/SearchProductsSection'

export const SearchResultsPage = () => {

  const { itemSearched, setItemSearched, productToBuy } = useContext(MeliContext)

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = "rgb(237, 237, 237)"
  }, [])

  const getItemSearched = async() => {
    const busqueda = await getProducts(productToBuy);
    setItemSearched(busqueda)
    
  }
  
  useEffect(() => {
    getItemSearched()
  }, [ productToBuy ])

  const { query, paging, available_filters, results } = itemSearched

  if (!itemSearched) return;
  return (
    <div>
      <SearchBanner />
      <div className='search-results-page'>
        <FiltrosSearch 
          busqueda={ query } 
          cantResultados={ paging.total } 
          availableFilters={ available_filters } 
        />
        <SearchProductsSection results={ results } />
      </div>
      
         
    </div>
  )
}
