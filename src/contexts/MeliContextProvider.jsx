import { useState } from "react"
import { MeliContext } from "./meliContext"
export const ContextProvider = ({children}) => {

    const [ menuActive, setMenuActive ] = useState(false)
    
    // Modal Medios de pago.
    const [ mediosDePagoIsActive, setMediosDePagoIsActive ] = useState(false)
    return(
        <MeliContext.Provider value={{
            menuActive,
            setMenuActive,
            mediosDePagoIsActive,
            setMediosDePagoIsActive
        }}>{ children }</MeliContext.Provider>
    )
}