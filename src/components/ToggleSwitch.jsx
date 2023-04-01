import '../styles/ToggleSwitch.css'

export const ToggleSwitch = ({ title, subtitle, img }) => {
  return (
    <div>
        <div className='toggle-switch-container'>
            <div className='toggle-switch-info'>
                <p> <img src={ img } />  { title }</p>
                <p>{ subtitle }</p>
            </div>
            <div>
                <input type='checkbox' id="toggle-switch"/>
                <label htmlFor="toggle-switch" className='toggle-switch'></label>
            </div>
            
        </div>
    </div>
  )
}
