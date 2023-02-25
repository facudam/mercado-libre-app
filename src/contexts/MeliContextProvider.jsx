import { useState } from "react"
import { MeliContext } from "./meliContext"
export const ContextProvider = ({children}) => {

    const [ menuActive, setMenuActive ] = useState(false)
    return(
        <MeliContext.Provider value={{
            menuActive,
            setMenuActive
        }}>{ children }</MeliContext.Provider>
    )
}