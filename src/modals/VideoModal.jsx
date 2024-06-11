import ReactDOM from 'react-dom';
import '../styles/VideoModal.css'
import video from '../images/meliclon.mp4'
import { useContext } from 'react';
import { MeliContext } from '../contexts/MeliContext';


export const VideoModal = () => {

    const { isVideoModalOpen, setIsVideoModalOpen } = useContext(MeliContext);

    if (!isVideoModalOpen) return null;
    return ReactDOM.createPortal(
        <div>
            <div onClick={ ()=> setIsVideoModalOpen(false) } className='full-screen'></div>
            <div className='video-ctn'>
                <div className='flex'>
                    <h3>Mensaje del desarrollador:</h3>
                    <button onClick={()=> setIsVideoModalOpen(false) }>Cerrar</button>
                </div>
                
                <p>Debido a las nuevas políticas de Mercado Libre para el uso de su API y las restricciones impuestas a terceros que no forman parte de su programa de partners, esta aplicación, que fue creada para poner en práctica y demostrar conocimientos, ha experimentado una importante disminución en su rendimiento, ya que no puede acceder a los datos de la API como lo hacía anteriormente.</p>
                <p>Dado el esfuerzo y la dedicación invertidos en su desarrollo, he decidido compartir con ustedes un video que muestra su funcionamiento antes de los cambios mencionados.</p>
                <p>A continuación, podrán ver un video grabado para una publicación en LinkedIn:</p>
                <video  controls>
                    <source src={video} type="video/mp4" />
                    Su navegador no soporta la etiqueta de video.
                </video>
            </div>
        </div>,
        document.getElementById('portal')
    )
}