import { Navigate, Route, Routes } from 'react-router'
import { Nav } from './components/Nav'
import { PaymentsContainer } from './components/PaymentsContainer'
import Slider from './components/Slider'
import { MainRoute } from './routes/MainRoute'



export const MercadoLibreApp = () => {
  return (
    <>
      <Nav /> 
      
      <Routes>
        <Route path='/' element={ <MainRoute />} />

        {/* En caso de que el usuario escriba una url inexistente lo enviamos a la url principal: */}
        <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    </>    
        
  )
}
