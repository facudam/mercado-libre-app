import { Navigate, Route, Routes } from 'react-router'
import { Nav } from './components/Nav'
import { NavHoverModal } from './modals/navHoverModal'
import { MainRoute } from './routes/MainRoute'
import { SearchResultsPage } from './routes/SearchResultsPage'

export const MercadoLibreApp = () => {

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
