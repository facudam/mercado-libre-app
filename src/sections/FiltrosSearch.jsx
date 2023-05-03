import { ToggleSwitch } from '../components/ToggleSwitch';
import full from '../images/full.png'
import '../styles/FiltrosSearch.css'

export const FiltrosSearch = ({ busqueda, cantResultados, availableFilters }) => {

  // Declaramos una variable que contendrá la maxima cantidad de objetos que renderizaremos dentro del availableFilters.map
  const MAX_OBJS = 9;

  return (
  <>
    <div className='filtros-search-mobile'>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg> Ordenar
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg> Filtrar
      </button>
    </div>
    <section className='filtros-search'>
        
        <h1>{ busqueda }</h1>
        <p className='cantidad-resultado'>{ cantResultados } resultados</p>
        
        <ToggleSwitch 
          title='Llegan mañana' 
          identifier="first"
        />
        <ToggleSwitch 
          title='te da envío gratis' 
          subtitle='En carritos desde $ 8.000' 
          img={ full } 
          identifier="second"
        />
        <ToggleSwitch 
          title='Envío gratis' 
          identifier="third"
        />

        <div className='available-filters-container'>
          {
            
            availableFilters.map(obj => (
              <div key={obj.id}>
                <h2>{ obj.name }</h2>
                <div>
                  {
                    // Con slice obtenemos sólo los primeros 9 values de cada obj.
                    obj.values.slice(0, MAX_OBJS).map(value => (
                      <p key={value.id}>{value.name} <span>({value.results})</span></p>
                    ))
                  }
                  {
                    // En caso de  haya más de 9 values dentro de cada obj, entonces añadimos una etiqueta <a></a> 
                    obj.values.length > MAX_OBJS &&
                    <a href='#'>Mostrar más</a>
                  }
                </div>
              </div>
            ))
          }
        </div>
        
    </section>
  </>
  )
}
