import { useContext, useEffect } from 'react'
import { MeliContext } from '../contexts/meliContext'
import { DescubriSection, MercadoPuntosSection, Ofertas, PaymentsContainer, SuscripcionNivel, TiendasSection, Categories } from '../sections'
import { Footer, Slider } from '../components'
import { CookiesModal } from '../modals'


export const MainRoute = () => {

  const { setLastProductAdded, setCantidadItem } = useContext(MeliContext)

  useEffect(() => {
    //Reiniciamos lastProductAdded a vacio.
    setLastProductAdded([])
    setCantidadItem(1)
  }, [])
  
  return (
    <>
        <Slider />
        <PaymentsContainer />
        <Ofertas title='Ofertas' toSearch='electrodomesticos' />
        <SuscripcionNivel />
        <MercadoPuntosSection />
        <DescubriSection />
        <TiendasSection />
        <Categories />
        <Footer />
        <CookiesModal />
    </>
  )
}
