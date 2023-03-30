import React, { useContext, useEffect } from 'react'
import { MeliContext } from '../contexts/meliContext'
import { getProducts } from '../helpers/getProducts'
import { FiltrosSearch } from '../sections/FiltrosSearch'
import '../styles/SearchResultsPage.css'

export const SearchResultsPage = () => {

  const { itemSearched, setItemSearched } = useContext(MeliContext)

  const getItemSearched = async() => {
    const busqueda = await getProducts('acordeon');
    setItemSearched(busqueda)
    console.log(busqueda)
  }

  useEffect(() => {
    getItemSearched()
  }, [])

  if (!itemSearched) return;
  return (
    <div className='search-results-page'>
        
      <FiltrosSearch busqueda={itemSearched.query} cantResultados={itemSearched.paging.total} availableFilters={itemSearched.available_filters} />
        
        
    </div>
  )
}
