import { useState } from "react"
import ReactDOM from "react-dom"
import '../styles/CookiesModal.css'

export const CookiesModal = () => {

  const [ cookiesAreAccepted, setCookiesAreAccepted ] = useState(false)

  if (cookiesAreAccepted) return
  return ReactDOM.createPortal(
    <div className="cookies-container">
        <div className="info-cookies-container">
            <div className="info-cookies">
                <p>Este sitio usa cookies</p>
                <p>Al navegar en nuestro sitio aceptas que usemos cookies para <a href="">personalizar tu experiencia</a> según la Declaración de Privacidad.</p>
            </div>
            <div className="buttons-cookies">
                <button onClick={ () => setCookiesAreAccepted(true) }>Entendido</button>
                <button>Configurar cookies</button>
            </div>
        </div>
    </div>, 
    document.getElementById('portal')
  )
}
