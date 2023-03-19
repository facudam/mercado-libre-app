import { Categories } from '../sections/Categories'
import { DescubriSection } from '../sections/DescubriSection'
import { MercadoPuntosSection } from '../sections/MercadoPuntosSection'
import { Ofertas } from '../sections/Ofertas'
import { PaymentsContainer } from '../sections/PaymentsContainer'
import Slider from '../components/Slider'
import { SuscripcionNivel } from '../sections/SuscripcionNivel'
import { TiendasSection } from '../sections/TiendasSection'


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
