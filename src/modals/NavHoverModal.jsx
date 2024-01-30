import { useContext } from "react"
import ReactDOM from "react-dom"
import { MeliContext } from "../contexts/MeliContext"
import '../styles/NavHoverModal.css'

export const NavHoverModal = () => {

  const { navIsHover } = useContext(MeliContext)

  if (!navIsHover) return;
  return ReactDOM.createPortal(
    <div className="nav-modal"></div>,
    document.getElementById('portal')
  )
}