import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './contexts/MeliContextProvider'
import './index.css'
import { MercadoLibreApp } from './MercadoLibreApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <MercadoLibreApp />
      </React.StrictMode>
    </BrowserRouter>
  </ContextProvider>
    
  
  
)
