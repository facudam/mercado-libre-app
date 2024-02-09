import { useContext, useEffect } from "react";
import  ReactDOM  from "react-dom";
import { MeliContext } from "../contexts/MeliContext";

export const MaintenanceModal = () => {

    const { setShowProductsComparison } = useContext(MeliContext)

    const estilos = {
        color: '#fff',
        backgroundColor: 'var(--azul)',     
        padding: '20px',
        borderRadius: '5px',
        fontSize: '1.1rem',
        position: 'fixed',
        textAlign: 'center',
        boxShadow: '2px 5px 5px 1px #808080',
        top: '50%',
        left: '50%',
        width: '100%',
        maxWidth: '600px',
        transform: 'translate(-50%, -50%)'
      };

    useEffect(() => {
        setTimeout(() => {
            setShowProductsComparison(false)
        }, 10000)
    }, [])

    return ReactDOM.createPortal(
        <div style={ estilos }>
            <p>Lo sentimos, lamentablemente por cambios en la estructura de los datos de la API por parte de sus creadores, esta funcionalidad se encuentra temporalmente en mantenimiento.</p>
        </div>,
        document.getElementById('portal')
    )
}