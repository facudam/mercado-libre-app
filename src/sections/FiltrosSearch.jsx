import '../styles/FiltrosSearch.css'

export const FiltrosSearch = ({ busqueda, cantResultados, availableFilters }) => {

  // Declaramos una variable que contendrá la maxima cantidad de objetos que renderizaremos dentro del availableFilters.map
  const MAX_OBJS = 9;

  return (
    <section className='filtros-search'>
        
        <h2>{ busqueda }</h2>
        <span className='cantidad-resultado'>{ cantResultados } resultados</span>
        
        <div className='available-filters-container'>
          {
            
            availableFilters.map(obj => (
              <div key={obj.id}>
                <h3>{ obj.name }</h3>
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
