import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import '../styles/CookiesModal.css'

export const CookiesModal = () => {

  let storage = localStorage.getItem('setCookiesAreAccepted')
  const [ cookiesAreAccepted, setCookiesAreAccepted ] = useState(storage ? true : false)

  

  const acceptingCookies = () => {
    setCookiesAreAccepted(true) 
    localStorage.setItem('setCookiesAreAccepted', cookiesAreAccepted)
    console.log(storage)
  }

  if (cookiesAreAccepted) return
  return ReactDOM.createPortal(
    <div className="cookies-container">
        <div className="info-cookies-container">
            <div className="info-cookies">
                <p>Este sitio usa cookies</p>
                <p>Al navegar en nuestro sitio aceptas que usemos cookies para <a href="">personalizar tu experiencia</a> según la Declaración de Privacidad.</p>
            </div>
            <div className="buttons-cookies">
                <button onClick={ acceptingCookies }>Entendido</button>
                <button>Configurar cookies</button>
            </div>
        </div>
    </div>, 
    document.getElementById('portal')
  )
}
