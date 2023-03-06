import React from 'react'
import { Ofertas } from '../components/Ofertas'
import { PaymentsContainer } from '../components/PaymentsContainer'
import Slider from '../components/Slider'

export const MainRoute = () => {
  return (
    <>
        <Slider />
        <PaymentsContainer />
        <Ofertas />
    </>
  )
}
