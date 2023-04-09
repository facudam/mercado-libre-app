import { Navigate, Route, Routes } from 'react-router'
import { Nav } from './components/Nav'
import { NavHoverModal } from './modals/navHoverModal'
import { MainRoute } from './routes/MainRoute'
import { SearchResultsPage } from './routes/SearchResultsPage'
import { useContext } from 'react'
import { MeliContext } from './contexts/meliContext'
import { ProductPage } from './routes/ProductPage'

export const MercadoLibreApp = () => {

  const { productToBuy, itemNameForPage } = useContext(MeliContext)

  return (
    <>
      <Nav />
      <NavHoverModal />
      <Routes>
        <Route path='/' element={ <MainRoute />} />

        {/* establecemos la ruta search como dinamica al agregar los dos puntos */}
        <Route path='/search/:product' element={ <SearchResultsPage />} />

        <Route path='/item/:item' element={ <ProductPage /> } />

        {/* En caso de que el usuario escriba una url inexistente lo enviamos a la url principal: */}
        <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    </>    
        
  )
}
