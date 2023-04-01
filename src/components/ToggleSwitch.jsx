import '../styles/ToggleSwitch.css'

export const ToggleSwitch = ({ title, subtitle, img, identifier }) => {

  const pressToggleButton = (identifier) => {
    const button = document.getElementById(identifier);
    button.classList.toggle('active')
  }

  return (
    <div className='toggle-switch-container'>
      <div className='toggle-switch-info'>
        <p> <img src={ img } />  { title }</p>
        <p>{ subtitle }</p>
      </div>
            
      <button
        id={ identifier }
        onClick={() => pressToggleButton(identifier)}
        className='toggle-switch'>
      </button>       
    </div>     
  )
}
