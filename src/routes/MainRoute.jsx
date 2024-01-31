import { useContext, useEffect } from 'react'
import { MeliContext } from '../contexts/MeliContext'
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
        <div style={{maxWidth:"1100px", margin:"auto"}}>
          <p style={{textAlign:"center", marginTop:"60px", backgroundColor:"red", color:"#fff", padding:"10px", borderRadius:"4px", fontSize:"1.05rem"}}><strong>¡Atención!</strong> Este sitio web no es un sitio oficial, solamente es un sitio creado como práctica y demostración de habilidades de desarrollo web.</p>
        </div>
        
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
