import { useContext, useEffect } from 'react'
import '../styles/PaginationComponent.css'
import { MeliContext } from '../contexts/meliContext'


export const PaginationComponent = ({ MAX_PAGES, anterior, siguiente }) => {

  const { currentPage, showPaginationButtons } = useContext(MeliContext)


  useEffect(() => {
    showPaginationButtons()
  }, [ currentPage ])

  return (
    <div className="pagination-component">
        <button onClick={ anterior } className='anterior'>
           <span>&lt;</span> Anterior
        </button>
        <div className='page-values'>
            <input value={ currentPage } disabled/>
            <p>de {MAX_PAGES}</p>
        </div>
        <button onClick={ siguiente } className='siguiente'>
            Siguiente <span>&gt;</span>
        </button>
    </div>
  )
}
