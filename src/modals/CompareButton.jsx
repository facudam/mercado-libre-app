import  ReactDOM  from "react-dom";
import '../styles/CompareButton.css'
import { useContext } from "react";
import { MeliContext } from "../contexts/MeliContext";

export const CompareButton = () => {

    const { productsToCompare, setShowProductsComparison } = useContext(MeliContext)

    return ReactDOM.createPortal(
        <button
            onClick={() => setShowProductsComparison(true)}
            className="compare-button">Comparar productos ({productsToCompare.length})
        </button>,
        document.getElementById('portal')
    )
}