import React from 'react'

export const FiltrosSearch = ({ busqueda, resultados }) => {
  return (
    <section className='filtros-search'>
        <div>
            <h2>{ busqueda }</h2>
            <span>{ resultados } resultados</span>
        </div>
        
    </section>
  )
}
