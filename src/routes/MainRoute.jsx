import { Categories } from '../components/Categories'
import { DescubriSection } from '../components/DescubriSection'
import { MercadoPuntosSection } from '../components/MercadoPuntosSection'
import { Ofertas } from '../components/Ofertas'
import { PaymentsContainer } from '../components/PaymentsContainer'
import Slider from '../components/Slider'
import { SuscripcionNivel } from '../components/SuscripcionNivel'
import { TiendasSection } from '../components/TiendasSection'


export const MainRoute = () => {
  
  return (
    <>
        <Slider />
        <PaymentsContainer />
        <Ofertas />
        <SuscripcionNivel />
        <MercadoPuntosSection />
        <DescubriSection />
        <TiendasSection />
        <Categories />
    </>
  )
}
