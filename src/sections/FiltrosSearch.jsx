import { ToggleSwitch } from '../components/ToggleSwitch';
import full from '../images/full.png'
import '../styles/FiltrosSearch.css'

export const FiltrosSearch = ({ busqueda, cantResultados, availableFilters }) => {

  // Declaramos una variable que contendrá la maxima cantidad de objetos que renderizaremos dentro del availableFilters.map
  const MAX_OBJS = 9;

  return (
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
  )
}
