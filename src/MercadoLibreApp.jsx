import { Navigate, Route, Routes } from 'react-router'
import { Nav } from './components/Nav'
import { NavHoverModal } from './modals/navHoverModal'
import { MainRoute } from './routes/MainRoute'
import { SearchResultsPage } from './routes/SearchResultsPage'
import { useContext } from 'react'
import { MeliContext } from './contexts/meliContext'
import { ProductPage } from './routes/ProductPage'
import { CarritoPage } from './routes/CarritoPage'

export const MercadoLibreApp = () => {

  return (
    <>
      <Nav />
      <NavHoverModal />
      <Routes>
        <Route path='/' element={ <MainRoute />} />

        {/* establecemos la ruta search como dinamica al agregar los dos puntos */}
        <Route path='/search/:product' element={ <SearchResultsPage />} />

        <Route path='/item/:item/:item' element={ <ProductPage /> } />

        <Route path='/gz/cart/v2' element={ <CarritoPage />} />

        {/* En caso de que el usuario escriba una url inexistente lo enviamos a la url principal: */}
        <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    </>    
        
  )
}
