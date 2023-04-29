import { Navigate, Route, Routes } from 'react-router'
import { Nav } from './components/Nav'
import { NavHoverModal } from './modals/navHoverModal'
import { MainRoute } from './routes/MainRoute'
import { SearchResultsPage } from './routes/SearchResultsPage'
import { ProductPage } from './routes/ProductPage'
import { CarritoPage } from './routes/CarritoPage'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'
import { BuyPage } from './routes/BuyPage'


export const MercadoLibreApp = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    //Nos aseguramos que cada vez que haya un cambio de ruta, vayamos al top de la pagina.
    window.scrollTo(0,0)
  }, [pathname])

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

        <Route path='/checkout/buying' element={ <BuyPage />} />

        {/* En caso de que el usuario escriba una url inexistente lo enviamos a la url principal: */}
        <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    </>    
        
  )
}
