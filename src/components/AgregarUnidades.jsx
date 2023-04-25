

export const AgregarUnidades = ({availableItems, addQuantityItems}) => {

    // Utilizamos una función map() para generar y devolver un arreglo de elementos del componente
    const elementos = Array.from({ length: availableItems }, (_, index) => (
      <span key={index} onClick={() => addQuantityItems(index + 1)}>{index + 1 }{(index === 0) ? ` unidad` : ` unidades`} </span>
    ));
  
    // Limitamos la cantidad de elementos a 6.
    const elementosLimitados = elementos.slice(0, 6);

  return (
    <>
      {elementosLimitados}
    </>
  )
}
