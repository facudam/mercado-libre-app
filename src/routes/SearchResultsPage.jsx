import React, { useContext, useEffect } from 'react'
import { SearchBanner } from '../components/SearchBanner'
import { MeliContext } from '../contexts/meliContext'
import { getProducts } from '../helpers/getProducts'
import { FiltrosSearch } from '../sections/FiltrosSearch'
import '../styles/SearchResultsPage.css'
import { SearchProductsSection } from '../sections/SearchProductsSection'

export const SearchResultsPage = () => {

  const { itemSearched, setItemSearched } = useContext(MeliContext)

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = "rgb(237, 237, 237)"
  }, [])

  const getItemSearched = async() => {
    const busqueda = await getProducts('bicicletas');
    setItemSearched(busqueda)
    console.log(busqueda.results)
  }

  useEffect(() => {
    getItemSearched()
  }, [])

  if (!itemSearched) return;
  return (
    <div>
      <SearchBanner />
      <div className='search-results-page'>
        <FiltrosSearch 
          busqueda={itemSearched.query} 
          cantResultados={itemSearched.paging.total} 
          availableFilters={itemSearched.available_filters} 
        />
        <SearchProductsSection results={ itemSearched.results } />
      </div>
      
         
    </div>
  )
}
