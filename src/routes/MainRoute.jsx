import React from 'react'
import { DescubriSection } from '../components/DescubriSection'
import { MercadoPuntosSection } from '../components/MercadoPuntosSection'
import { Ofertas } from '../components/Ofertas'
import { PaymentsContainer } from '../components/PaymentsContainer'
import Slider from '../components/Slider'
import { SuscripcionNivel } from '../components/SuscripcionNivel'

export const MainRoute = () => {
  return (
    <>
        <Slider />
        <PaymentsContainer />
        <Ofertas />
        <SuscripcionNivel />
        <MercadoPuntosSection />
        <DescubriSection />
    </>
  )
}
