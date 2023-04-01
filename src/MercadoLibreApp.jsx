import { Navigate, Route, Routes } from 'react-router'
import { Nav } from './components/Nav'
import { NavHoverModal } from './modals/navHoverModal'
import { MainRoute } from './routes/MainRoute'
import { SearchResultsPage } from './routes/SearchResultsPage'
import { useContext } from 'react'
import { MeliContext } from './contexts/meliContext'

export const MercadoLibreApp = () => {

  const { productToBuy } = useContext(MeliContext)

  return (
    <>
      <Nav />
      <NavHoverModal />
      <Routes>
        <Route path='/' element={ <MainRoute />} />
        <Route path='/search' element={ <SearchResultsPage />} />

        {/* En caso de que el usuario escriba una url inexistente lo enviamos a la url principal: */}
        <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    </>    
        
  )
}
