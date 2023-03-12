import React from 'react'
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
    </>
  )
}
