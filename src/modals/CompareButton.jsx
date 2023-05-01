import  ReactDOM  from "react-dom";
import '../styles/CompareButton.css'
import { useContext } from "react";
import { MeliContext } from "../contexts/meliContext";

export const CompareButton = () => {

    const { productsToCompare } = useContext(MeliContext)

    return ReactDOM.createPortal(
        <button className="compare-button">Comparar productos ({productsToCompare.length})</button>,
        document.getElementById('portal')
    )
}