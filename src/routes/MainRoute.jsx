import { Categories } from '../sections/Categories'
import { DescubriSection } from '../sections/DescubriSection'
import { MercadoPuntosSection } from '../sections/MercadoPuntosSection'
import { Ofertas } from '../sections/Ofertas'
import { PaymentsContainer } from '../sections/PaymentsContainer'
import Slider from '../components/Slider'
import { SuscripcionNivel } from '../sections/SuscripcionNivel'
import { TiendasSection } from '../sections/TiendasSection'
import { Footer } from '../components/Footer'
import { CookiesModal } from '../modals/CookiesModal'

export const MainRoute = () => {
  
  return (
    <>
        <Slider />
        <PaymentsContainer />
        <Ofertas titulo='Ofertas' paraBuscar='electrodomesticos' />
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
