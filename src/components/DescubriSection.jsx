import React from 'react'
import { DescubriContainer } from './DescubriContainer'
import descubriImg1 from '../images/descubri-img1.webp'
import descubriImg2 from '../images/descubri-img2.webp'
import '../styles/DescubriSection.css'

export const DescubriSection = () => {
  return (
    <section className='descubri-section'>
        <h2>Descubrí</h2>
        <div className='descubri-section__info'>
            <DescubriContainer title='MODA' infoPromo='HASTA 30% OFF Y 6 CUOTAS FIJAS' image={ descubriImg1 } />
            <DescubriContainer title='RENOVÁ TU HOGAR' infoPromo='HASTA 20% OFF EN BAZAR Y COCINA' image={ descubriImg2 } />
        </div>
    </section>
  )
}
