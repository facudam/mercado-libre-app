import '../styles/PreguntasYRespuestas.css'

export const PreguntasYRespuestas = () => {
  return (
    <section className='preguntas-respuestas'>
        <h2>Preguntas y respuestas</h2>
        <p>¿Qué querés saber?</p>
        <div className='tags'>
            <span>Costo y tiempo de envío</span>
            <span>Devoluciones gratis</span>            
            <span>Medios de pago y promociones</span>
            <span>Cuotas sin tarjeta</span>
            <span>Garantía</span>
        </div>
        <div className='form-ask'>
            <h3>Preguntale al vendedor</h3>
            <form>
                <input type='text' placeholder='Escribí tu pregunta...' />
                <input type='submit' value="Preguntar" disabled />
            </form>
        </div>
    </section>
  )
}
