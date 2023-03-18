import '../styles/DescubriContainer.css'

export const DescubriContainer = ({ title, infoPromo, image }) => {
  return (
    <div className='descubri-container'>
      <div className="descubri-container__info">
        <p>{ title }</p>
        <p>{ infoPromo }</p>
        <button>Ver más</button>
      </div>
      <img src={ image} />
    </div>
  )
}


