import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './contexts/MeliContextProvider'
import './index.css'
import { MercadoLibreApp } from './MercadoLibreApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <React.StrictMode>
      <MercadoLibreApp />
    </React.StrictMode>
  </ContextProvider>
    
  
  
)
